// let numbers = [5, 8, 11, 5, 7, 9];
// let i = 0;
// let found = false;

// while (i < numbers.length) {
//   if (numbers[i] > 10) {
//     console.log("Найдено число больше 10: " + numbers[i]);
//     found = true;
//     break;
//   }
//   i++;
// }

// if (!found) {
//   console.log("Ничего не нашел");
// }

let userInput;
let iteration = 0;
let tries = 5;

while (true) {
  iteration++;
  userInput = prompt(
    'Отгадай загадку: "Зимой и летом - одним цветом"'
  ).toLowerCase();

  if (userInput === "елка" || userInput === "ёлка" || userInput === "ель") {
    alert("Верно!");
    break;
  } else if (iteration >= tries) {
    alert("Попытки закончились ((");
  } else {
    alert("Осталось попыток: " + (tries - iteration));
  }
}

alert("Завершено");
