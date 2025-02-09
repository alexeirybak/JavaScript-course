// Обычный Fetch API - POST-запрос

fetch("https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    createdAt: new Date().getTime(),
    text: "text 777",
    completed: false,
    order: 777,
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка ответа сервера");
    } else {
      console.log(response);
    }
    return response.json();
  })
  .then((data) => console.log("Данные получены:", data))
  .catch((error) => console.error("Ошибка:", error));

// Тот же POST-запрос с axios
axios
  .post(
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
  )
  .then((response) => {
    console.log("Данные получены:", response.data);
  })
  .catch((error) => console.error("Ошибка:", error));

// Пример обновления задачи (метод PUT)
axios({
  method: "put",
  url: "https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos/2",
  data: {
    createdAt: new Date().getTime(),
    order: 999,
  },
})
  .then((response) => {
    console.log("Данные получены:", response.data);
  })
  .catch((error) => console.error("Ошибка:", error));
