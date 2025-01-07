const loader = document.getElementById("loader");

async function getData() {
  try {
    loader.style.display = "block";
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // if (!response.ok) {
    //   throw new Error(`Данные не получены. Статус: ${response.status}`);
    // }

    // const data = await response.json();

    const mockData = [
      {
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        userId: 1,
      },
      {
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        userId: 1,
      },
    ];

    const data = await Promise.resolve(mockData);

    console.log("Данные получены:", data);
    renderData(data);
  } catch (error) {
    if (error.message === "Failed to fetch") {
      console.error("Ошибка: Нет подключения к интернету.");
    } else {
      console.error("Ошибка:", error.message);
    }
  } finally {
    loader.style.display = "none";
  }
}

function renderData(posts) {
  const container = document.getElementById("posts-container");

  container.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const bodyElement = document.createElement("p");
    bodyElement.textContent = post.body;

    postElement.append(titleElement);
    postElement.append(bodyElement);

    container.appendChild(postElement);
  });
}

const btn = document.getElementById("button");
btn.addEventListener("click", getData);
