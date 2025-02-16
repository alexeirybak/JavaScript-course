class Dog {
  constructor(name, breed, weight = 3) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }

  increaseWeight() {
    this.weight += 1;
    console.log(this.weight);
  }

  decreaseWeight() {
    this.weight -= 1;
    console.log(this.weight);
  }
}

const dog1 = new Dog("Шарик", "корги");

const dog2 = new Dog("Бобик", "шпиц", 5);

const dog3 = new Dog("Тузик", "дворняга", 6);

console.log(dog1);
console.log(dog3);
