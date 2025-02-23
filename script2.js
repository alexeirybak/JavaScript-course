class BankAccount {
  #balance = 0; // Приватное поле: баланс счета

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Геттер для баланса
  get balance() {
    return this.#balance;
  }

  // Метод для пополнения счета
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Счет пополнен на ${amount}. Новый баланс: ${this.#balance}`);
    } else {
      console.error("Сумма для пополнения должна быть положительной.");
    }
  }

  // Метод для снятия средств
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Со счета снято ${amount}. Новый баланс: ${this.#balance}`);
    } else {
      console.error("Недостаточно средств или неверная сумма.");
    }
  }
}

const account = new BankAccount(1000);

account.deposit(500); // Счет пополнен на 500. Новый баланс: 1500
account.withdraw(200); // Со счета снято 200. Новый баланс: 1300
account.withdraw(2000); // Ошибка: Недостаточно средств или неверная сумма.
