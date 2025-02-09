// Отмена запроса

// Создаем экземпляр Axios
const axiosInstance = axios.create();

// Переменная для хранения AbortController
let abortController; //Переменная abortController используется для хранения текущего экземпляра AbortController. Это позволяет отменить предыдущий запрос, если он еще не завершен. Вызов abortController.abort() отменяет предыдущий запрос.

// Функция для выполнения запроса
function fetchWeatherData(lat, lon) {
  // Отменяем предыдущий запрос, если он еще не завершен
  if (abortController) {
    abortController.abort(); // Отменяем предыдущий запрос. Если переменная abortController существует (то есть предыдущий запрос еще не завершен), вызывается метод abortController.abort(). Это отменяет предыдущий запрос. В консоль выводится сообщение: "Предыдущий запрос отменен.".
    console.log("Предыдущий запрос отменен.");
  }

  // Создаем новый AbortController. Создается новый экземпляр AbortController, который будет использоваться для текущего запроса.
  abortController = new AbortController();

  // Отправляем запрос
  axiosInstance({
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      lat: lat,
      lon: lon,
      lang: "ru",
      units: "metric",
      appid: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Ваш токен
    },
    signal: abortController.signal, // Передаем сигнал AbortController
  })
    .then((response) => {
      console.log("Данные получены:", response.data);
    })
    .catch((error) => {
      if (axios.isCancel(error)) {
        console.log("Запрос отменен:", error.message); // Если запрос отменен, обрабатывается ошибка: axios.isCancel(error): Проверяет, была ли ошибка вызвана отменой запроса. error.name === 'AbortError': Проверяет, была ли ошибка вызвана AbortController.
      } else if (error.name === "AbortError") {
        console.log("Запрос был отменен с помощью AbortController.");
      } else {
        console.log("Ошибка:", error);
      }
    });
}

// Пример вызова функции
fetchWeatherData(45, 40);
// Первый запрос выполняется сразу с координатами (45, 40).
// Через 1 секунду выполняется второй запрос с координатами (46, 41). Этот запрос отменяет первый, если он еще не завершен.
// Пример вызова функции с задержкой, чтобы продемонстрировать отмену
setTimeout(() => {
  fetchWeatherData(46, 41); // Этот запрос отменит предыдущий
}, 100);
