// Обычный Fetch API GET-запрос
fetch("https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos")
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

// Тот же запрос с axios (метод get используется по умолчанию, поэтому его можно не указывать)
axios
  .get("https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos")
  .then((response) => console.log("response", response.data))
  .catch((error) => console.error("error", error));
