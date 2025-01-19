import { auth, sendPasswordResetEmail } from "../../firebaseConfig.js";

const forgotPasswordForm = document.getElementById("forgot-password-form");
const forgotPasswordMessage = document.getElementById(
  "forgot-password-message"
);

forgotPasswordForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("forgot-password-email").value;

  try {
    await sendPasswordResetEmail(auth, email);
    forgotPasswordMessage.textContent =
      "Письмо для сброса пароля отправлено на ваш email.";
    forgotPasswordMessage.style.color = "green";
  } catch (error) {
    console.error("Ошибка при отправке письма:", error.message);
    forgotPasswordMessage.textContent = `Ошибка: ${error.message}`;
    forgotPasswordMessage.style.color = "red";
  }
});
