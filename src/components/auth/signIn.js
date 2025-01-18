import { auth, signInWithEmailAndPassword } from "../../firebaseConfig.js";

const signinForm = document.getElementById("signin-form");

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
    console.log("Пользователь авторизован", user.uid);

    alert("Авторизация прошла успешно");
  } catch (error) {
    console.error("Ошибка авторизации: ", error.message, error.code);
    alert(`Ошибка авторизации: ${error.message}`);
  }
});
