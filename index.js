let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let printPage = 0;

while (printPage < pages.length) {
  if (pages[printPage] % 2 === 0) {
    // Если страница четная, то она не печатается
    printPage++;
    continue;
  }
  console.log(`Печатается страница ${pages[printPage]}`);
  printPage++;
}

while (true) {
  // запускаем бесконечный цикл,
  // т.к. не знаем точной итерации на которой нужно будет выйти из цикла
  const msg = prompt("Введите ваше сообщение"); // в переменную msg записываем
  // сообщение введенное пользователем
  console.log(msg); // выводим сообщение пользователя
  if (msg === "stop") {
    // проверяем, сообщение введенное пользователем равно stop
    break; // если равно, то выходим из цикла
  }
}

let numbers = [1, 2, 0, 3, 4, 0, 5, 6];
let product = 1;
let i = 0;

while (i < numbers.length) {
  if (numbers[i] === 0) {
    // Если число равно 0, пропускаем его
    i++; // Увеличиваем индекс перед continue
    continue;
  }
  product *= numbers[i];
  i++; // Второй инкремент
}

console.log(`Произведение чисел, не равных 0: ${product}`);

while(true) { // бесконечный цик
  const msg = prompt('Введите сообщение'); // сообщение от пользователя
  if (msg === 'next') { // если next
    continue; // код ниже не выполнится, переходим к следующему шагу цикла
  }
  console.log(msg); // выводим сообщение пользователя
  if (msg === 'stop') { // если stop
    break; // прекращвем выполнение цикла
  }
}



