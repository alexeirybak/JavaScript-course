import { auth, createUserWithEmailAndPassword } from "../../firebaseConfig.js";

const signupForm = document.getElementById("signup-form");

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

    alert("Регистрация прошла успешно! Теперь вы можете войти.");
  } catch (error) {
    console.error("Ошибка регистрации: ", error.message, error.code);
    alert(`Ошибка регистрации: ${error.message}`);
  }
});
