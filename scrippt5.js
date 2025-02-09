// Перехватчики запроса и ответа

// Создаем экземпляр Axios
const axiosInstance = axios.create();

// Перехватчик запроса
axiosInstance.interceptors.request.use(
  (config) => {
    // Добавляем токен авторизации в параметры запроса
    if (!config.params) {
      config.params = {};
    }
    config.params["appid"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // Ваш токен
    console.log("Запрос отправлен:", config);
    return config;
  },
  (error) => {
    // Обработка ошибок запроса
    return Promise.reject(error);
  }
);

// Перехватчик ответа
axiosInstance.interceptors.response.use(
  (response) => {
    // Обработка успешного ответа
    console.log("Ответ получен:", response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// Используем экземпляр Axios для отправки запроса
axiosInstance({
  url: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    lat: 45,
    lon: 40,
    lang: "ru",
    units: "metric",
  },
})
  .then((response) => {
    console.log("Данные получены:", response.data);
  })
  .catch((error) => {
    // Ошибки обрабатываются в перехватчике
  });
