class Dog {
  constructor(name, breed, weight = 3) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }

  increaseWeight(amount = 1) {
    this.weight += amount;
    console.log(this.weight);
  }

  decreaseWeight(amount = 1) {
    this.weight -= amount;
    console.log(this.weight);
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

console.log(dog1.hasOwnProperty("name")); // true
console.log(dog1.hasOwnProperty("isTrained")); // true

const dog2 = new Dog("Шарик", "корги", 7);

console.log(dog1);
console.log(dog2);
