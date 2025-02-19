// Фабричный метод

class Dog {
    constructor(name, breed, weight = 3) {
      this.name = name;
      this.breed = breed;
      this.weight = weight;
    }
  
    // Фабричный метод
    static createLabrador(name, weight = 30) {
      return new Dog(name, "лабрадор", weight);
    }
  }
  
  const labrador = Dog.createLabrador("Флинт");
  console.log(labrador); 
  const dogs = ["Бобик", "Шарик", "Тузик", "Бим", "Мухтар"];
  
  const createdDogs = dogs.map((dog) => Dog.createLabrador(dog));
  console.log(createdDogs);
  