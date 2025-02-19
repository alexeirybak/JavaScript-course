class Dog {
  constructor(name, breed, weight = 3) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }
  static color = "white";

  static increaseWeight(amount = 1) {
    this.weight += amount;
    console.log(this.weight);
  }

  static decreaseWeight(amount = 1) {
    this.weight -= amount;
    console.log(this.weight);
  }
}

class HuntingDog extends Dog {
  constructor(name, breed, weight = 10, isTrained = false) {
    super(name, breed, weight);
    this.isTrained = isTrained;
  }

  static duckHunt() {
    this.increaseWeight(0.5);
    this.isTrained = true;
    console.log(`${this.name} поймал утку! Теперь он дрессированный!`);
  }
}

const dog1 = new Dog("Шарик", "корги", 7);
const dog2 = new HuntingDog("Бим", "лайка", 20);

console.log(dog1.hasOwnProperty("color")); // false - статичное свойство принадлежит только классу, а не экземпляру
console.log(Dog.hasOwnProperty("color")); // true - это свойство статично, поэтому принадлежит экземпляру

console.log(dog2.hasOwnProperty("duckHunt")); // false - этот метод статичен, поэтому есть только у класса, но не у экземпляра
console.log(HuntingDog.hasOwnProperty("duckHunt")); // true
console.log(HuntingDog.hasOwnProperty("decreaseWeight")); // false - этот метод статичен, поэтому есть только у родительского класса
console.log(Dog.hasOwnProperty("decreaseWeight")); // true - этот метод статичен, поэтому у родительского класса он есть
