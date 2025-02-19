// Статические свойства и методы и this

class Dog {
    constructor(name) {
      this.name = name; // Свойство экземпляра
    }
  
    static totalDogs = 0; // Статическое свойство
  
    static staticMethod() {
      console.log(this); // Ссылается на класс Dog
      console.log(this.totalDogs); // Обращение к статическому свойству
      console.log(this.name); // Dog
  
  }
  }
  
  const dog = new Dog("Шарик");
  Dog.staticMethod(); // Вызов статического метода через класс
  
  