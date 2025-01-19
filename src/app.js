import { initDeleteCompleted, initAddTodo } from "./components/index.js";

initAddTodo();
initDeleteCompleted();

const signupForm = document.getElementById("signup-form");

signupForm.style.display = "display";

import { auth, onAuthStateChanged } from "./firebaseConfig.js";
import { loadData } from "./components/index.js";
import { hideSigninForm, showTasksBlock } from "./components/index.js";
import { hideSignupForm } from "./components/index.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Пользователь уже авторизован:", user.uid);
    loadData(); // Загружаем данные для авторизованного пользователя
    hideSigninForm(); // Скрываем форму входа
    hideSignupForm();
    showTasksBlock(); // Показываем блок с задачами
  } else {
    console.log("Пользователь не авторизован.");
  }
});
