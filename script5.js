// Статическое свойство недоступно через экземпляр
class Dog {
    static totalDogs = 0;
  
    constructor(name) {
      this.name = name;
      Dog.totalDogs += 1;
    }
  }
  
  const dog1 = new Dog("Шарик");
  console.log(Dog.totalDogs); // 1
  console.log(dog1.totalDogs); // undefined (статическое свойство не доступно через экземпляр)
