class User {
  // Приватное свойство
  #password;

  // Псевдоприватное свойство
  _email;

  constructor(email, password) {
    this._email = email;
    this.#password = password;
  }

  // Приватный метод
  #validatePassword() {
    return this.#password.length >= 8;
  }

  // Публичный метод
  login() {
    if (this.#validatePassword()) {
      console.log("Пароль valid!");
    } else {
      console.log("Пароль слишком короткий!");
    }
  }
}

const user = new User("test@example.com", "12345678");
user.login(); // Пароль valid!
