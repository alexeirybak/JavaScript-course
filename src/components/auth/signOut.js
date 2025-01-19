import { auth, signOut } from "../../firebaseConfig.js";
import { showSigninForm } from "./signUp.js";

const logoutButton = document.getElementById("logoutButton");
const taskContainer = document.getElementById("task-container");

logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("Пользователь вышел из системы.");
      showSigninForm();
      taskContainer.style.display = "none";
    })
    .catch((error) => {
      console.error("Ошибка при выходе из системы:", error);
    });
});
