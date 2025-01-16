import { getAuth, signInWithEmailAndPassword } from "../../firebaseConfig.js";
const auth = getAuth();

const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");
const tasksBlock = document.getElementById("posts-container");

// Проверяем, авторизован ли пользователь
if (localStorage.getItem("isAuthenticated")) {
  hideAuthForms();
  showTasksBlock();
}

signinForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Пользователь авторизован:", user.uid);

    // Сохраняем состояние авторизации
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("userId", user.uid); // Сохраняем uid

    // Скрываем формы и показываем задачи
    hideAuthForms();
    showTasksBlock();
  } catch (error) {
    console.error("Ошибка авторизации:", error.message, error.code);
    alert(`Ошибка авторизации: ${error.message}`);
  }
});

// Функция для скрытия форм авторизации и регистрации
function hideAuthForms() {
  signinForm.style.display = "none";
  signupForm.style.display = "none";
}

// Функция для отображения блока с задачами
function showTasksBlock() {
  tasksBlock.style.display = "block";
}
