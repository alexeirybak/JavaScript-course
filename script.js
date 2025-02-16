const dog1 = {
  name: "Шарик",
  breed: "корги",
  weight: 7,
  bark() {
    console.log(`${this.name} лает: Гав!`);
  },
  increaseWeight() {
    console.log(this.weight + 1);
  },
  decreaseWeight() {
    console.log(this.weight - 1);
  },
};

const dog2 = {
  name: "Бобик",
  breed: "шпиц",
  weight: 5,
  bark() {
    console.log(`${this.name} лает: Тяв!`);
  },
  increaseWeight() {
    console.log(this.weight + 1);
  },
  decreaseWeight() {
    console.log(this.weight - 1);
  },
};

dog1.bark();
dog2.bark();

dog1.increaseWeight();
dog2.increaseWeight();

dog1.decreaseWeight();
dog2.decreaseWeight();
