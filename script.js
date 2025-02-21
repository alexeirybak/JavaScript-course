class Dog {
  weight = 3.33;
  // Статическое свойство (общее для всех экземпляров класса)
  static species = "Canis lupus familiaris";

  constructor(name, breed, weight = 10) {
    // Значение по умолчанию для weight
    this.name = name;
    this.breed = breed;
    this.weight = weight; // Инициализация свойства weight
  }

  increaseWeight(amount = 1) {
    this.weight += amount;
    console.log(`${this.name} теперь весит ${this.weight} кг.`);
  }

  decreaseWeight(amount = 1) {
    this.weight -= amount;
    console.log(`${this.name} теперь весит ${this.weight} кг.`);
  }
}

class HuntingDog extends Dog {
  constructor(name, breed, weight, isTrained = false) {
    super(name, breed, weight); // Вызов конструктора родительского класса
    this.isTrained = isTrained; // Инициализация нового свойства
  }

  duckHunt() {
    this.increaseWeight(0.5);
    this.isTrained = true;
    console.log(`${this.name} поймал утку! Теперь он дрессированный!`);
  }
}

// const dog1 = new Dog("Бим", "лайка", 5);
// dog1.increaseWeight(); 
// console.log(dog1); 

// const dog2 = new HuntingDog("Шарик", "дворняга", 7, true);
// dog2.increaseWeight();
// dog2.duckHunt(); 
// console.log(dog2); 

// console.log(Dog.species); 
// console.log(HuntingDog.species); 


class Dog {
  static species = "Canis lupus familiaris";
}

class HuntingDog extends Dog {
  static species = "Canis lupus huntingus"; // Переопределение статического свойства
}

console.log(Dog.species); 
console.log(HuntingDog.species); 

class HuntingDog extends Dog {
  constructor(name, breed, weight, isTrained = false) {
    super(name, breed, weight); 
    this.isTrained = isTrained; 
  }

increaseWeight(amount = 1) {
    this.weight += amount * 100;
    this.isTrained = true;
    console.log(`${this.name} теперь весит ${this.weight} кг.`);
  }

  duckHunt() {
    this.increaseWeight(0.5);
    console.log(`${this.name} поймал утку! Теперь он дрессированный!`);
  }
}

class HuntingDog extends Dog {
  constructor(name, breed, weight, isTrained = false) {
    super(name, breed, weight); // Вызов конструктора родительского класса
    this.isTrained = isTrained; // Инициализация нового свойства
  }

  increaseWeight(amount = 1) {
    this.weight += amount * 100;
    this.isTrained = true;
    //console.log(`${this.name} теперь весит ${this.weight} кг.`);
    super.increaseWeight(amount); // переиспользуем метод родительского класса, чтобы вывести сообщение в консоль
  }

  duckHunt() {
    this.increaseWeight(0.5);
    console.log(`${this.name} поймал утку! Теперь он дрессированный!`);
  }
}

const dog3 = new HuntingDog("Шарик", "дворняга", 7);
dog2.increaseWeight(); 
console.log(dog2); 
class Dog {
  // Статическое свойство (общее для всех экземпляров класса)
  static species = "Собака";

  weight = 3.33;

  constructor(name, breed, weight = this.weight) {
    // Значение по умолчанию для weight
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }

  increaseWeight(amount = 1) {
    this.weight += amount;
    console.log(`${this.name} теперь весит ${this.weight} кг.`);
  }

  decreaseWeight(amount = 1) {
    this.weight -= amount;
    console.log(`${this.name} теперь весит ${this.weight} кг.`);
  }

  getInfo() {
    return `${this.name} (${this.breed})`;
  }
}

class HuntingDog extends Dog {

  static species = "Собака охотничья";

  constructor(name, breed, weight, isTrained = false) {
    super(name, breed, weight); // Вызов конструктора родительского класса
    this.isTrained = isTrained; // Инициализация нового свойства
  }

  increaseWeight(amount = 1) {
    this.weight += amount * 100;
    this.isTrained = true;
    //console.log(`${this.name} теперь весит ${this.weight} кг.`);
    super.increaseWeight(amount); // переиспользуем метод родительского класса, чтобы вывести сообщение в консоль
  }

  getInfo() {
    const trainedStatus = this.isTrained ? "дрессирован" : "не дрессирован";
    return `${super.getInfo()}, статус: ${trainedStatus}`;
  }

  duckHunt() {
    this.increaseWeight(0.5);
    console.log(`${this.name} поймал утку! Теперь он дрессированный!`);
  }
}

const dog1 = new Dog("Бим", "лайка");
console.log(dog1.getInfo()); 

const dog2 = new HuntingDog("Шарик", "дворняга", 9, true);
console.log(dog2.getInfo());


