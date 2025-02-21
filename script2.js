class Dog {
  // Приватное свойство
  #weight;

  constructor(name, breed, weight = 3) {
    this.name = name;
    this.breed = breed;
    this.#weight = weight;
  }

  increaseWeight(amount = 1) {
    this.#weight += amount;
    console.log(this.#weight);
  }

  decreaseWeight(amount = 1) {
    this.#weight -= amount;
    console.log(this.#weight);
  }

  // Геттер для доступа к приватному свойству
  get weight() {
    return this.#weight;
  }

  // Сеттер для изменения приватного свойства
  set weight(value) {
    if (value > 0) {
      this.#weight = value;
    } else {
      console.error("Вес должен быть положительным числом");
    }
  }

  static compareWeight(a, b) {
    return a.#weight - b.#weight;
  }
}

class HuntingDog extends Dog {
  constructor(name, breed, weight = 10, isTrained = false) {
    super(name, breed, weight);
    this.isTrained = isTrained;
  }

  duckHunt() {
    this.increaseWeight(0.5);
    this.isTrained = true;
    console.log(`${this.name} поймал утку! Теперь он дрессированный!`);
  }
}

const dog1 = new HuntingDog("Бим", "лайка", 20);

// Попытка изменить приватное свойство напрямую вызовет ошибку
// dog1.#weight = 30; // SyntaxError: Private field '#weight' must be declared in an enclosing class

// Используем сеттер для изменения веса
dog1.weight = 30; // Работает, так как используется сеттер

console.log(dog1); // HuntingDog { name: 'Бим', breed: 'лайка', isTrained: false }
console.log(dog1.weight); // 30, используем геттер для доступа к приватному свойству // 2
  
  