import { auth, createUserWithEmailAndPassword } from "../../firebaseConfig.js";

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

    alert("Регистрация прошла успешно! Теперь вы можете войти.");
    signupForm.reset();
    hideSignupForm();
    showSigninForm();
  } catch (error) {
    console.error("Ошибка регистрации: ", error.message, error.code);
    alert(`Ошибка регистрации: ${error.message}`);
  }
});

function hideSignupForm() {
  signupForm.style.display = "none";
}

function showSigninForm() {
  signinForm.style.display = "block";
}
