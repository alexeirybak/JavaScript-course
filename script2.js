// Статические свойства

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
  
    // Статическое свойство
    static totalDogs = 0;
  }
  
  class HuntingDog extends Dog {
    constructor(name, breed, weight = 10, isTrained = false) {
      super(name, breed, weight);
      this.isTrained = isTrained;
      Dog.totalDogs += 1; // Увеличиваем счетчик при создании экземпляра
    }
  
    duckHunt() {
      this.increaseWeight(0.5);
      this.isTrained = true;
      console.log(`${this.name} поймал утку! Теперь он дрессированный!`);
    }
  }
  
  // Использование статического свойства
  console.log(Dog.totalDogs); // 0
  
  const dog1 = new HuntingDog("Рекс", "лабрадор");
  const dog2 = new HuntingDog("Мухтар", "немецкая овчарка");
  
  console.log(Dog.totalDogs); // 2
  
  