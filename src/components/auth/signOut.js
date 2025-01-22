import { auth, signOut } from "../../firebaseConfig.js";
import { hideSignupForm } from "./signUp.js";
import { showSigninForm } from "./signUp.js";

document.getElementById("logout-button").addEventListener("click", async () => {
  try {
    await signOut(auth);
    hideSignupForm();
    showSigninForm();
    document.getElementById("task-container").style.display = "none";
    console.log("Пользователь вышел из системы");
  } catch (error) {
    console.error("Ошибка при выходе из системы: ", error.message);
  }
});
