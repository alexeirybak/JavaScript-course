import { getAuth, createUserWithEmailAndPassword } from "../../firebaseConfig.js";
const auth = getAuth();

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
    console.log("Пользователь зарегистрирован:", user.uid);

    hideSignupForm();
    showSigninForm();

    signupForm.reset();

    alert("Регистрация прошла успешно! Теперь вы можете войти.");
  } catch (error) {
    console.error("Ошибка регистрации:", error.message, error.code);
    alert(`Ошибка регистрации: ${error.message}`);
  }
});


function hideSignupForm() {
  const signupForm = document.getElementById("signup-form");
  signupForm.style.display = "none";
}

function showSigninForm() {
  const signinForm = document.getElementById("signin-form");
  signinForm.style.display = "block";
}