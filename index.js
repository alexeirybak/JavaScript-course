// Пример 1

//let age = 10;
//alert(age <= 12 ? "Доступ запрещен." : "Можете скачать приложение.")

// Пример 2

// let age = +prompt("Сколько Вам лет?", 18);
// let message;

// if (age < 12) {
//   message = "Здравствуй, малыш!";
// } else if (age < 18) {
//   message = "Привет, друг!";
// } else if (age < 150) {
//   message = "Здравствуйте!";
// } else {
//   message = "Нынче столько не живут!";
// }

// alert(message);

// Для сравнения:

// let message =
//   age < 12
//     ? "Здравствуй, малыш!"
//     : age < 18
//     ? "Привет, друг!"
//     : age < 150
//     ? "Здравствуйте!"
//     : "Нынче столько не живут!";

// alert(message);

// Пример 3

// let age = 20;
// let message =
//   age >= 18
//     ? age >= 60
//       ? "Вы пенсионер"
//       : "Доступ разрешен"
//     : "Доступ ограничен";
// console.log(message); 

// Для сравнения:

// let age = 20;
// let message;

// if (age >= 18) {
//   if (age >= 60) {
//     message = "Вы пенсионер";
//   } else {
//     message = "Доступ разрешен";
//   }
// } else {
//   message = "Доступ ограничен";
// }

// console.log(message); 

// if-else позволяет вставлять 2 и более инструкции:

// let category;

// if (age >= 18) {
//   if (age >= 60) {
//     message = "Вы пенсионер";
//     category = pensioner;
//   } else {
//     message = "Доступ разрешен";
//     category = adult;
//   }
// } else {
//   message = "Доступ ограничен";
//   category = child;
// }

// console.log(message); 
