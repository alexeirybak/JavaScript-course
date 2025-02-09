let abortController;
const message = document.getElementById("output");

function sendRequest() {
  if (abortController) {
    abortController.abort();
    console.log("Предыдущий запрос отменен");
  }

  abortController = new AbortController();

  const videoFile = document.getElementById("videoFile").files[0];

  if (!videoFile) {
    message.textContent = "Пожалуйста, выберите видеофайл";
    return;
  }

  const data = new FormData();
  data.append("video", videoFile);

  axios({
    method: "post",
    url: "https://httpbin.org/post",
    data,
    signal: abortController.signal,
    maxBodyLength: 100 * 1024 * 1024,
    onUploadProgress: (progressEvent) => {
      console.log(progressEvent);
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      document.getElementById("uploadProgress").value = percentCompleted;
      document.getElementById("uploadPercentage").textContent =
        percentCompleted + "%";
    },
    onDownloadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      document.getElementById("downloadProgress").value = percentCompleted;
      document.getElementById("downloadPercentage").textContent =
        percentCompleted + "%";
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.message && error.message.includes("canceled")) {
        console.log("Запрос был отменен с помощью AbortController");
        message.textContent = "Ошибка:" + error.message;
      } else {
        message.textContent = error.message;
      }
    });
}

document.getElementById("uploadButton").addEventListener("click", () => {
  sendRequest();
});

document.getElementById("cancelButton").addEventListener("click", () => {
  if (abortController) {
    abortController.abort();
    message.textContent = "Запрос отменен пользователем";
  }
});
