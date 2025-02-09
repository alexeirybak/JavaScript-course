// Можем вводить params в запросе в более удобном виде:
// Вместо https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos?id=3 сделать так:
axios
  .get("https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos", {
    params: {
      id: 3,
    },
  })
  .then((response) => console.log("response", response.data))
  .catch((error) => console.error("error", error));

//Вместо https://jsonplaceholder.typicode.com/comments?postId=1 делать
axios
  .get("https://jsonplaceholder.typicode.com/comments", {
    params: {
      postId: 1,
    },
  })
  .then((response) => console.log("response", response.data))
  .catch((error) => console.error("error", error));

// С использованием config
axios({
  method: "post",
  url: "https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos",
  data: {
    createdAt: new Date().getTime(),
    text: "text 777",
    completed: false,
    order: 777,
  },
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    console.log("Данные получены:", response.data);
  })
  //У axios расширенные возможности обработки ошибок
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

// В конструкции try-catch
async function sendRequest() {
  try {
    const response = await axios.post(
      "https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos",
      {
        createdAt: new Date().getTime(),
        text: "text 777",
        completed: false,
        order: 777,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Данные получены:", response.data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
// Вызов функции
sendRequest();
