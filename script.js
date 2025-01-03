const loader = document.getElementById("loader");

async function fetchData(url, errorMessage) {
  try {
    loader.style.display = "block";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Данные не получены. Статус: ${response.status}`);
    }

    const data = await response.json();

    console.log("Данные получены:", data);
    return data;
  } catch (error) {
    if (error.message === "Failed to fetch") {
      console.error("Ошибка: Нет подключения к интернету.");
    } else {
      console.error(`${errorMessage}`, error.message);
    }
    throw error;
  } finally {
    loader.style.display = "none";
  }
}

async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const errorMessage = "Ошибка при получении постов";
  const result = await fetchData(url, errorMessage);
  return result;
}

async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const errorMessage = "Ошибка при получении пользователей";
  const result = await fetchData(url, errorMessage);
  return result;
}

async function getComments() {
  const url = "https://jsonplaceholder.typicode.com/comments123";
  const errorMessage = "Ошибка при получении комментариев";
  const result = await fetchData(url, errorMessage);
  return result;
}

async function getData() {
  try {
    const [postsResult, usersResult, commentsResult] = await Promise.allSettled(
      [getPosts(), getUsers(), getComments()]
    );

    const posts = postsResult.status === "fulfilled" ? postsResult.value : [];
    const users = usersResult.status === "fulfilled" ? usersResult.value : [];
    const comments =
      commentsResult.status === "fulfilled" ? commentsResult.value : [];

    console.log("Посты:", postsResult);
    console.log("Пользователи:", usersResult);
    console.log("Комментарии:", commentsResult);

    const container = document.getElementById("posts-container");

    container.innerHTML = "";

    if (posts.length === 0) {
      container.innerHTML = "<p>Нет доступных постов</p>";
      return;
    }

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      const titleElement = document.createElement("h2");
      titleElement.textContent = post.title;

      const bodyElement = document.createElement("p");
      bodyElement.textContent = post.body;

      postElement.append(titleElement);
      postElement.append(bodyElement);

      if (users.length > 0) {
        const user = users.find((user) => user.id === post.userId);

        const userElement = document.createElement("div");
        const nameElement = document.createElement("p");
        nameElement.textContent = `Author: ${user.name}`;

        const emailElement = document.createElement("p");
        emailElement.textContent = `Email: ${user.email}`;

        const websiteElement = document.createElement("p");
        websiteElement.textContent = `Website: ${user.website}`;

        userElement.append(nameElement);
        userElement.append(emailElement);
        userElement.append(websiteElement);

        postElement.append(userElement);
      }

      if (comments.length > 0) {
        const postComments = comments.filter(
          (comment) => comment.postId === post.id
        );

        if (postComments.length > 0) {
          const commentsContainer = document.createElement("div");
          commentsContainer.classList.add("comments");

          const commentsTitle = document.createElement("h3");
          commentsTitle.textContent = "Comments:";
          commentsContainer.append(commentsTitle);

          postComments.forEach((comment) => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");

            const commentName = document.createElement("p");
            commentName.textContent = `Name: ${comment.name}`;

            const commentEmail = document.createElement("p");
            commentEmail.textContent = `Email: ${comment.email}`;

            const commentBody = document.createElement("p");
            commentBody.textContent = comment.body;

            commentElement.append(commentName);
            commentElement.append(commentEmail);
            commentElement.append(commentBody);

            commentsContainer.append(commentElement);
          });

          postElement.append(commentsContainer);
        }
      }

      container.append(postElement);
    });
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

const btn = document.getElementById("button");
btn.addEventListener("click", getData);
