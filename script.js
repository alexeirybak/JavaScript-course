class Dog {
  #weight;
  #name;
  constructor(name, breed, weight = 3) {
    this.#name = name;
    this.breed = breed;
    this.#weight = weight;
  }

  get fullData() {
    return `${this.breed} ${this.#name}`;
  }

  set fullData(value) {
    [this.breed, this.#name] = value.split(" ");
  }

  increaseWeight(amount = 1) {
    this.#weight += amount;
    console.log(this.#weight);
  }
}

const dog1 = new Dog("Бим", "лайка", 20);

dog1.fullData = "болонка Бася";

console.log(dog1);
