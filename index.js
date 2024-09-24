// let a = prompt("Введите первое число");
// let b = prompt("Введите второе число");
// let mult = a * b;
// console.log(`Произведение двух чисел равняется ${mult}`);

// function multiply(a, b) {
//   let mult = a * b;
//   console.log(`Произведение двух чисел равняется ${mult}`);
// }

// while (true) {
//   const age = +prompt("Введите свой возраст").toLowerCase().trim();
//   if (age) {
//     console.log(age);
//     break;
//   }
// }

// while (true) {
//   const salary = +prompt("Какая у Вас зарплата").toLowerCase().trim();
//   if (salary) {
//     console.log(salary);
//     break;
//   }
// }

// while (true) {
//   const term = +prompt("Укажите срок кредитования в месяцах")
//     .toLowerCase()
//     .trim();
//   if (term) {
//     console.log(term);
//     break;
//   }
// }

// function getUserInput(question) {
//   while (true) {
//     const input = +prompt(question).toLowerCase().trim();
//     if (input) {
//       console.log(input);
//       break;
//     }
//   }
// }

// getUserInput("Введите свой возраст");
// getUserInput("Какая у Вас зарплата");
// getUserInput("Укажите срок кредитования в месяцах");

// function multiply(a, b) {
//   let mult = a * b;
// }

// console.log(multiply); // [Function: multiply]

// function multiply(a, b) {
//   let mult = a * b;
// }

// console.log(multiply()); // undefined

// function multiply(a, b) {
//   let mult = a * b;
// }

// console.log(multiply(3, 5)); // undefined

// function multiply(a, b) {
//   let mult = a * b;
//   return mult;
// }

// console.log(multiply(3, 5)); // 15

// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(3, 5)); // 15

// const result = function multiply(a, b) {
//   return a * b;
// };

// const multResult = result(3, 5); // Вызываем функцию и сохраняем результат
// console.log(multResult); // 15

// const result = function multiply(a, b) {
//   return a * b;
// };

// const multResult = result; // Вызываем функцию и сохраняем результат
// console.log(multResult); // [Function: multiply]

// function multiply(a, b) {
//   // Здесь a и b - параметры
//   let mult = a * b;
//   console.log(`Произведение двух чисел равняется ${mult}`);
// }

// multiply(2, 3); // Здесь 2 и 3 - аргументы вызова

// function sayHi() {
//   console.log("Привет!");
// }

// sayHi(); // Привет!

// function unknown() {
//   const result = function multiply(a, b) {
//     return a * b;
//   };

//   const multResult = result(3, 5); // Вызываем функцию и сохраняем результат
//   console.log(multResult); // Выводим результат в консоль
// }

// unknown(); // Главное – не забыть ее потом вызвать

// function multiply(a, b = 1) {
//   // Если второй аргумент не задан, используем "1"
//   let mult = a * b;
//   console.log(`Произведение двух чисел равняется ${mult}`);
// }

// multiply(2); // Произведение двух чисел равняется 2

// function multiply(a, b) {
//   // Здесь a и b - параметры
//   let mult = a * b;
//   console.log(`Произведение двух чисел равняется ${mult}`);
// }

// let c = 3;
// let d = 7;

// multiply(c, d); // Произведение двух чисел равняется 21

// // Определяем функцию multiply, которая принимает два аргумента и возвращает их произведение
// function multiply(a, b) {
//   return a * b;
// }

// // Определяем функцию calculate, которая принимает два аргумента и передает их в функцию multiply
// function calculate(x, y) {
//   // Передаем аргументы x и y в функцию multiply и сохраняем результат в переменную result
//   let result = multiply(x, y);
//   // Выводим результат в консоль
//   console.log(`Произведение чисел ${x} и ${y} равно ${result}`);
// }

// // Вызываем функцию calculate с аргументами 3 и 4
// calculate(3, 4); // Произведение чисел 3 и 4 равно 12

// // Определяем функцию anotherFunction
// function anotherFunction() {
//   return 5; // Возвращаем значение 5
// }

// // Определяем функцию multiply
// function multiply(a, b = anotherFunction()) {
//   // Если второй аргумент не задан, используем "anotherFunction()"
//   let mult = a * b;
//   console.log(`Произведение двух чисел равняется ${mult}`);
// }

// // Вызываем функцию multiply с одним аргументом
// multiply(2); // Произведение двух чисел равняется 10
