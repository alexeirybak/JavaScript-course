const loader = document.getElementById("loader");

function getData() {
  loader.style.display = "block";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Данные не получены. Статус: ${response.status}`);
    })
    .then((data) => {
      console.log("Данные получены:", data);
      renderData(data);
    })
    .catch((error) => {
      if (error.message === "Failed to fetch") {
        console.error("Ошибка: Нет подключения к интернету.");
      } else {
        console.error("Ошибка:", error.message);
      }
    })
    .finally(() => {
      loader.style.display = "none";
    });
}

function renderData(posts) {
  const container = document.getElementById("posts-container");

  // Очищаем контейнер перед добавлением новых данных
  container.innerHTML = "";

  // Создаем HTML-элемент для каждого поста
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    // Заголовок поста
    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    // Текст поста
    const bodyElement = document.createElement("p");
    bodyElement.textContent = post.body;

    // Добавляем заголовок и текст в элемент поста
    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);

    // Добавляем пост в контейнер
    container.appendChild(postElement);
  });
}

const btn = document.getElementById("button");
btn.addEventListener("click", getData);




