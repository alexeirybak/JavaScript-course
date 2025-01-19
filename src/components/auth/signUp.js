import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "../../firebaseConfig.js";
import { signInWithGoogle } from "./googleAuth.js"; // Импорт функции для Google

const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const signInButton = document.getElementById("signIn");

signInButton.addEventListener("click", (event) => {
  event.preventDefault();
  hideSignupForm();
  showSigninForm();
});

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    console.log("Пользователь зарегистрирован", user.uid);

    await sendEmailVerification(user);
    alert(
      "Регистрация прошла успешно! Письмо для верификации отправлено на ваш email."
    );
    signupForm.reset();
    hideSignupForm();
    showSigninForm();
  } catch (error) {
    console.error("Ошибка регистрации: ", error.message, error.code);
    alert(`Ошибка регистрации: ${error.message}`);
  }
});

document.getElementById("google-sign-button").addEventListener("click", signInWithGoogle);

export function hideSignupForm() {
  signupForm.style.display = "none";
}

export function showSigninForm() {
  signinForm.style.display = "flex";
}
