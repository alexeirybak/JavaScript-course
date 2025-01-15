import { SUPABASE_URL } from "../../API/host.js";
let accessToken = null;

// Регистрация пользователя
const regButton = document.getElementById("signup-form");

regButton.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("signup-email");
  const passwordInput = document.getElementById("signup-password");

  const regEmail = emailInput.value;
  const regPassword = passwordInput.value;

  try {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ regEmail, regPassword }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Ошибка регистрации");
    }

    const data = await response.json();
    console.log("Пользователь зарегистрирован:", data);
    alert("Регистрация прошла успешно!");
  } catch (error) {
    console.error("Ошибка регистрации:", error.message);
    alert("Ошибка регистрации: " + error.message);
  }
});

// Авторизация пользователя
const authButton = document.getElementById("signin-form");
authButton.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("signin-email");
  const passwordInput = document.getElementById("signin-password");

  const authEmail = emailInput.value;
  const authPassword = passwordInput.value;

  try {
    const response = await fetch(
      `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: authEmail, password: authPassword }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error_description || "Ошибка авторизации");
    }

    const data = await response.json();
    accessToken = data.access_token; // Сохраняем токен
    console.log("Пользователь авторизован:", data);
    alert("Авторизация прошла успешно!");

    loadTodos(); // Загружаем задачи
  } catch (error) {
    console.error("Ошибка авторизации:", error.message);
    alert("Ошибка авторизации: " + error.message);
  }
});


// Авторизация пользователя
document.getElementById("signin-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  try {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/token`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, grant_type: "password" }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error_description || "Ошибка авторизации");
    }

    const data = await response.json();
    accessToken = data.access_token; // Сохраняем токен
    console.log("Пользователь авторизован:", data);
    alert("Авторизация прошла успешно!");

    loadTodos(); // Загружаем задачи
  } catch (error) {
    console.error("Ошибка авторизации:", error.message);
    alert("Ошибка авторизации: " + error.message);
  }
});

// // Добавление задачи
// document.getElementById("add-todo-form").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const text = document.getElementById("task-input").value;

//   try {
//     const response = await fetch(`${SUPABASE_URL}/rest/v1/todos`, {
//       method: "POST",
//       headers: {
//         "apikey": SUPABASE_KEY,
//         "Authorization": `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ text, completed: false }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Ошибка добавления задачи");
//     }

//     const data = await response.json();
//     console.log("Задача добавлена:", data);
//     alert("Задача добавлена!");

//     // Очищаем поле ввода и обновляем список задач
//     document.getElementById("task-input").value = "";
//     loadTodos();
//   } catch (error) {
//     console.error("Ошибка добавления задачи:", error.message);
//     alert("Ошибка добавления задачи: " + error.message);
//   }
// });

// // Загрузка задач
// async function loadTodos() {
//   try {
//     const response = await fetch(`${SUPABASE_URL}/rest/v1/todos`, {
//       method: "GET",
//       headers: {
//         "apikey": SUPABASE_KEY,
//         "Authorization": `Bearer ${accessToken}`,
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Ошибка загрузки задач");
//     }

//     const data = await response.json();
//     console.log("Задачи получены:", data);

//     // Отображаем задачи
//     const todosContainer = document.getElementById("todos-container");
//     todosContainer.innerHTML = "<h2>Список задач</h2>";
//     data.forEach((todo) => {
//       const todoElement = document.createElement("div");
//       todoElement.textContent = `${todo.text} (${todo.completed ? "Выполнено" : "Не выполнено"})`;
//       todosContainer.appendChild(todoElement);
//     });
//   } catch (error) {
//     console.error("Ошибка загрузки задач:", error.message);
//     alert("Ошибка загрузки задач: " + error.message);
//   }
// }

