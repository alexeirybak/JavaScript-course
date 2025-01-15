import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeY4XY1W5VBl2HZoewWxouWM8mU0wPB8c",
  authDomain: "todo-app-2c3ce.firebaseapp.com",
  databaseURL:
    "https://todo-app-2c3ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-app-2c3ce",
  storageBucket: "todo-app-2c3ce.firebasestorage.app",
  messagingSenderId: "755317864004",
  appId: "1:755317864004:web:906b26f4b16c3041f4ae11",
  measurementId: "G-Q1S1KZ20N9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Функция авторизации
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Пользователь авторизован:", user.uid);
    return user;
  } catch (error) {
    console.error("Ошибка авторизации:", error.message);
    throw error;
  }
}

// Получаем форму авторизации
const signinForm = document.getElementById("signin-form");

// Добавляем обработчик события отправки формы
signinForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Предотвращаем стандартное поведение формы

  // Получаем значения полей email и password
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  try {
    // Вызываем функцию авторизации
    const user = await signIn(email, password);
    console.log("Успешная авторизация:", user);
  } catch (error) {
    console.error(`Ошибка авторизации: ${error.message}`);
    throw error;
  }
});
