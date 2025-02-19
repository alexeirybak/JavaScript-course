// Статические методы

class Dog {
    constructor(name, breed, weight = 3) {
      this.name = name;
      this.breed = breed;
      this.weight = weight;
    }
  
    // Статическое свойство
     static totalDogs = 0;
  
  
    // Статический метод
    static compareWeight(a, b) {
      return a.weight - b.weight;
    }
  }
  
  class HuntingDog extends Dog {
    constructor(name, breed, weight = 10, isTrained = false) {
      super(name, breed, weight);
      this.isTrained = isTrained;
      Dog.totalDogs += 1;
    }
  }
  
  const dogs = [
    new HuntingDog("Рекс", "лабрадор"),
    new HuntingDog("Мухтар", "немецкая овчарка", 35, true),
    new HuntingDog("Лорд", "такса", 11, true),
  ];
  
  dogs.sort(Dog.compareWeight);
  
  console.log(dogs); // вывод собак, отсортированных по весу
  