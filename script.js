const registeredUsers = [
  { username: "user1", password: "Password1" },
  { username: "user2", password: "Password2" },
  { username: "user3", password: "Password3" },
];

const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const successMessage = document.getElementById("success-message");
const welcomeMessage = document.getElementById("welcome-message");
const welcomeUsername = document.getElementById("welcome-username");

function validateUsername(username) {
  // Изменить шаблон на: только буквы и цифры, и быть длиной от 3 до 20 символов
  const usernameRegex = /^[a-zA-Z0-9]{1,20}$/;
  return usernameRegex.test(username);
}

function validatePassword(password) {
  // Изменить шаблон на: не менее 8 символов, включая обязательно буквы в разных регистрах, и еще обязательно цифры и специальные символы
  const passwordRegex = /^[a-zA-Z0-9]{1,}$/;
  return passwordRegex.test(password);
}

document.getElementById("register-button").addEventListener("click", () => {
  // Очистка предыдущих ошибок при второй и последующих попытках
  usernameError.textContent = "";
  passwordError.textContent = "";

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    // Валидация логина
    if (!validateUsername(username)) {
      // Исправляем текст ошибки в соответствии с шаблоном регулярного выражения
      throw new Error("Логин должен содержать только буквы и цифры.");
    }

    // Валидация пароля
    if (!validatePassword(password)) {
      // Исправляем текст ошибки в соответствии с шаблоном регулярного выражения
      throw new Error(
        "Пароль должен содержать не менее 8 символов, включая буквы и цифры"
      );
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
      welcomeMessage.style.display = "block";
      successMessage.style.display = "none";
    } else {
      // Если валидация прошла успешно
      successMessage.style.display = "block";
      welcomeMessage.style.display = "none";
    }
  } catch (error) {
    // Обработка ошибок
    if (error.message.includes("Логин")) {
      usernameError.textContent = error.message;
    } else if (error.message.includes("Пароль")) {
      passwordError.textContent = error.message;
    } else if (error.message.includes("существует")) {
      usernameError.textContent = error.message;
    }
  }
});
