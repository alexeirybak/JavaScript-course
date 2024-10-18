const registeredUsers = [
  { username: "user1", password: "Password1!", email: "user1@example.com" },
  { username: "user2", password: "Password2!", email: "user2@example.com" },
  { username: "user3", password: "Password3!", email: "user3@example.com" },
];

const loginError = document.getElementById("login-error");
const passwordError = document.getElementById("password-error");
const welcomeMessage = document.getElementById("welcome-message");
const welcomeUsername = document.getElementById("welcome-username");

document.getElementById("login-button").addEventListener("click", () => {
  // Очистка предыдущих ошибок при второй и последующих попытках
  loginError.textContent = "";
  passwordError.textContent = "";

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  try {
    let userFound = false;
    let correctPassword = false;

    for (let i = 0; i < registeredUsers.length; i++) {
      if (
        registeredUsers[i].username === login ||
        registeredUsers[i].email === login
      ) {
        userFound = true;
        if (registeredUsers[i].password === password) {
          correctPassword = true;
          welcomeUsername.textContent = registeredUsers[i].username;
          welcomeMessage.style.display = "block";
          break;
        }
      }
    }

    if (!userFound) {
      throw new Error("Пользователь с таким именем не найден");
    }

    if (!correctPassword) {
      throw new Error("Введен неверный пароль");
    }
  } catch (error) {
    // Обработка ошибок
    if (error.message.includes("Пользователь")) {
      loginError.textContent = error.message;
    } else if (error.message.includes("пароль")) {
      passwordError.textContent = error.message;
    }
  }
});
