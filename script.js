document.getElementById("get-button").addEventListener("click", xmlGetData);
document.getElementById("post-button").addEventListener("click", xmlPostData);
const url = "https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos/";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Пользователь не авторизован (401)");
      } else if (response.status === 404) {
        throw new Error("Ресурс не найден (404)");
      } else if (response.status === 500) {
        throw new Error("Ошибка сервера (500)");
      } else {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
    }

    const data = await response.json();
    console.log("Данные получены:", data);
  } catch (error) {
    throw error;
  }
}

async function xmlGetData() {
  const request = new XMLHttpRequest();

  request.open("GET", url);

  request.responseType = "json";

  request.timeout === 5000;

  request.send();

  request.onload = () => {
    if (request.status === 200) {
      const data = request.response;
      console.log(data);
    } else {
      console.error("Ошибка при загрузке данных: ", request.statusText);
    }
  };

  request.onerror = () => {
    console.error("Ошибка сети");
  };

  request.ontimeout = () => {
    console.error(
      "Запрос превысил время ожидания. Проверьте подключение к интернету"
    );
  };
}

async function xmlPostData() {
  const request = new XMLHttpRequest();

  request.open("POST", `url/${id}`);

  request.setRequestHeader("Content-Type", "appication/json");

  request.responseType = "json";

  request.timeout === 5000;

  const dataToSend = {
    id: "5",
    completed: false,
    createdAt: new Date().getTime(),
    order: 5,
    text: "Выгулять собаку",
  };

  request.send(JSON.stringify(dataToSend));

  request.onload = () => {
    if (request.status === 201) {
      const responseData = request.response;
      console.log("Данные успешно отправлены: ", responseData);
    } else {
      console.error("Ошибка при отправке данных: ", request.statusText);
    }
  };

  request.onerror = () => {
    console.error("Ошибка сети: не удается установить соединение с сервером");
  };

  request.ontimeout = () => {
    console.error(
      "Запрос превысил время ожидания. Проверьте подключение к интернету"
    );
  };
}
