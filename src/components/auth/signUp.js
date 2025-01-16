import { getAuth, createUserWithEmailAndPassword } from "../../firebaseConfig.js";
const auth = getAuth();

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    // Регистрируем пользователя
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Пользователь зарегистрирован:", user.uid);

    //window.location.href = "/dashboard.html"; // Замените на нужный URL
  } catch (error) {
    console.error("Ошибка регистрации:", error.message, error.code);

    throw error;
  }
});
