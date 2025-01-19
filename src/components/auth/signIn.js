import {
  auth,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "../../firebaseConfig.js";
import { loadData } from "../index.js";
import { signInWithGoogle } from "./googleAuth.js";

const signinForm = document.getElementById("signin-form");
const taskContainer = document.getElementById("task-container");
document
  .getElementById("google-sign-button")
  .addEventListener("click", signInWithGoogle);

const forgotPasswordForm = document.getElementById("forgot-password-form");

document
  .getElementById("forgot-password-button")
  .addEventListener("click", showForgotPasswordForm);

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

    if (!user.emailVerified) {
      alert("Ваш email не верифицирован. Пожалуйста, проверьте вашу почту.");
      const resend = confirm("Отправить письмо для верификации повторно?");
      if (resend) {
        await sendEmailVerification(user);
        alert(
          "Письмо для верификации отправлено повторно. Пожалуйста, проверьте вашу почту."
        );
      }
    } else {
      console.log("Вход выполнен успешно!");
    }

    console.log("Пользователь авторизован", user.uid);
    hideSigninForm();
    showTasksBlock();
    loadData();
  } catch (error) {
    console.error("Ошибка авторизации: ", error.message, error.code);
  }
});

export function showTasksBlock() {
  taskContainer.style.display = "block";
}

export function hideSigninForm() {
  signinForm.style.display = "none";
}

function showForgotPasswordForm() {
  forgotPasswordForm.style.display = "flex";
  hideSigninForm();
}
