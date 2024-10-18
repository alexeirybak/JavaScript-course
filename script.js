const registeredUsers = [
  { username: "user1", password: "Password1!" },
  { username: "user2", password: "Password2!" },
  { username: "user3", password: "Password3!" },
];

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirm-password").value;
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const successMessage = document.getElementById("success-message");
const welcomeMessage = document.getElementById("welcome-message");
const welcomeUsername = document.getElementById("welcome-username");

function validateUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
  return usernameRegex.test(username);
}

function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

document
  .getElementById("register-button")
  .addEventListener("click", function () {
    // Очистка предыдущих ошибок при второй и последующих попытках
    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    try {
      // Валидация логина
      if (!validateUsername(username)) {
        throw new Error(
          "Логин должен содержать только буквы и цифры, и быть длиной от 3 до 20 символов."
        );
      }

      // Валидация пароля
      if (!validatePassword(password)) {
        throw new Error(
          "Пароль должен содержать не менее 8 символов, включая буквы, цифры и специальные символы"
        );
      }

      // Проверка совпадения паролей
      if (password !== confirmPassword) {
        throw new Error("Пароли не совпадают!");
      }

      // Проверка на существующего пользователя
      let existingUser = false; // Флаг уже по умолчанию, существует ли пользователь с таким логином и паролем в массиве registeredUsers
      let userExists = false; // Флаг по умолчанию, существует ли пользователь с таким логином в массиве registeredUsers.

      for (let i = 0; i < registeredUsers.length; i++) {
        if (
          // Проверка существования пользователя с введенным логином и паролем
          registeredUsers[i].username === username &&
          registeredUsers[i].password === password
        ) {
          existingUser = true;
        }
        // Проверка существования пользователя с введенным логином
        if (registeredUsers[i].username === username) {
          userExists = true;
        }
      }

      if (userExists && !existingUser) {
        throw new Error("Пользователь с таким именем уже существует.");
      }

      if (existingUser) {
        welcomeUsername.textContent = username;
        welcomeMessage.classList.remove("hidden");
        successMessage.classList.add("hidden");
      } else {
        // Если валидация прошла успешно
        successMessage.classList.remove("hidden");
        welcomeMessage.classList.add("hidden");
      }
    } catch (error) {
      // Обработка ошибок
      if (error.message.includes("Логин")) {
        usernameError.textContent = error.message;
      } else if (error.message.includes("Пароль")) {
        passwordError.textContent = error.message;
      } else if (error.message.includes("совпадают")) {
        confirmPasswordError.textContent = error.message;
      } else if (error.message.includes("существует")) {
        usernameError.textContent = error.message;
      }
    }
  });
