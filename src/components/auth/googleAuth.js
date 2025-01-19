import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
} from "../../firebaseConfig.js";
import { hideSigninForm, showTasksBlock } from "./signIn.js"; // Импорт функций из signin.js
import { loadData } from "../index.js"; // Импорт функции loadData

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);

    if (result._tokenResponse.isNewUser) {
      console.log("Регистрация через Google прошла успешно!");
    } else {
      console.log("Вход через Google выполнен успешно!");
    }

    // Скрываем формы и показываем задачи
    hideSigninForm();
    showTasksBlock();
    loadData();
  } catch (error) {
    console.error("Ошибка входа через Google:", error.message);
    alert(`Ошибка входа через Google: ${error.message}`);
  }
}
