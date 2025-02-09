// Создаем экземпляр Axios с базовыми настройками
const axiosInstance = axios.create({
  baseURL: "https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos", // Базовый URL
  headers: {
    "Content-Type": "application/json", // Устанавливаем тип контента
  },
});

function addTodo() {
  return axiosInstance({
    method: "post",
    data: {
      createdAt: new Date().getTime(),
      text: "text 111",
      completed: false,
      order: 111,
    },
  })
    .then((response) => console.log("Данные получены:", response.data))
    .catch((error) => console.error("Ошибка:", error));
}

addTodo();

// Устанавливаем глобальные конфигурации по умолчанию
axios.defaults.baseURL = "https://677e662d94bde1c1252bc48a.mockapi.io/api/v1";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios({
  method: "post",
  url: "/todos", // Базовый URL уже задан в конфигурации по умолчанию
  data: {
    createdAt: new Date().getTime(),
    text: "text 777",
    completed: false,
    order: 777,
  },
})
  .then((response) => {
    console.log("Данные получены:", response.data);
  })
  .catch((error) => console.error("Ошибка:", error));
