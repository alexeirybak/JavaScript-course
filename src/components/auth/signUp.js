import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "../../firebaseConfig.js";
import { signWithGoogle } from "./googleAuth.js";
import {
  showSuccess,
  showError,
  showWarning,
} from "../../utils/notification.js";
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const signInButton = document.getElementById("signIn");

const googleButton = document.getElementById("google-signup-button");
googleButton.addEventListener("click", signWithGoogle);

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
    await sendEmailVerification(user);

    showSuccess(
      "Для входа необходимо верифицировать email. Пожалуйста,проверьте свою почту"
    );
    signupForm.reset();
    hideSignupForm();
    showSigninForm();
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-exists":
      case "auth/email-already-in-use":
        showWarning(
          "Этот email уже зарегистрирован. Пожалуйста, войдите в систему"
        );
        break;
      case "auth/invalid-email":
        showWarning(
          "Неверный формат email. Пожалуйста, проверьте введенные данные"
        );
        break;
      case "auth/weak-password":
        showWarning("Пароль должен быть не менее 6 символов");
        break;
      default:
        showWarning(
          "Произошла неизвестная ошибка: ",
          error.message,
          error.code
        );
        break;
    }
  }
});

export function hideSignupForm() {
  signupForm.style.display = "none";
}

export function showSigninForm() {
  signinForm.style.display = "flex";
}
