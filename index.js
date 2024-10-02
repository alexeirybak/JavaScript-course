// Переменные для хранения первого числа, второго числа, флага ожидания второго числа и текущего оператора
let firstNumber = "";
let secondNumber = "";
let waitingForSecondNumber = false;
let currentOperator = "";

// Получаем элемент дисплея по его ID
const display = document.getElementById("display"); // 1. Вставьте идентификатор

// Получаем все элементы с классом "number" (кнопки с цифрами)
const numbers = document.querySelectorAll(".number"); // 2. Вставьте указание на нужный класс

// Получаем все элементы с классом "operator" (кнопки с операторами)
const operators = document.querySelectorAll(".operator"); // 3. Вставьте указание на нужный класс

// Получаем элемент кнопки "=" по его ID
const equalOperator = document.getElementById("equal"); // 4. Вставьте идентификатор

// Получаем элемент кнопки "C" (очистка) по его классу
const clearButton = document.querySelector(".clear"); // 5. Вставьте указание на нужный класс

// Добавляем обработчик события "click" на каждую кнопку с цифрой
numbers.forEach((button) => { // 6. Вставьте переменную
  button.addEventListener("click", () => {
    // Вызываем функцию appendNumber с текстом кнопки
    appendNumber(button.innerText);
  });
});

// Функция для добавления цифры на дисплей
function appendNumber(number) {
  // Если ожидаем второе число, устанавливаем дисплей в значение цифры
  if (waitingForSecondNumber) {
    // Устанавливаем значение дисплея равным переданной цифре
    display.value = number;
    // Сбрасываем флаг ожидания второго числа
    waitingForSecondNumber = false;
    // Устанавливаем второе число равным переданной цифре
    secondNumber = number;
  } else {
    // Иначе добавляем цифру к текущему значению дисплея
    display.value += number;
    // И добавляем цифру к текущему значению второго числа
    secondNumber += number;
  }
}

// Добавляем обработчик события "click" на каждую кнопку с оператором
operators.forEach((operator) => { // 7. Вставьте переменную
  operator.addEventListener("click", () => {
    // Если первое и второе числа уже введены, выполняем вычисление
    if (firstNumber !== "" && secondNumber !== "") {
      calculate();
    }
    // Устанавливаем флаг ожидания второго числа, поскольку после нажатия кнопки оператора ввод первого числа уже завершен
    waitingForSecondNumber = true;
    // Вызываем функцию setOperator с текстом оператора
    setOperator(operator.innerText);
  });
});

// Функция для установки текущего оператора
function setOperator(operator) {
  // Если первое число еще не введено, устанавливаем его равным текущему значению дисплея, в том числе на случай продолжения вычислений после вывода результата
  if (firstNumber === "") {
    firstNumber = display.value;
  }
  // Устанавливаем текущий оператор
  currentOperator = operator;
}

// Добавляем обработчик события "click" на кнопку "="
equalOperator.addEventListener("click", () => {
  // Если текущий оператор и второе число введены, выполняем вычисление
  if (currentOperator && secondNumber) {
    calculate();
  }
});

// Функция для выполнения вычислений
function calculate() { // 8. Вставьте название функции
  let result;
  // Преобразуем первое и второе числа в числа с плавающей точкой
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  // Выполняем вычисление в зависимости от текущего оператора
  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      // Проверяем, что второе число не равно нулю, чтобы избежать деления на ноль
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Ошибка: деление на ноль";
      }
      break;
  }

  // Устанавливаем результат на дисплей
  display.value = result;
  // Сохраняем результат как первое число для возможности продолжения вычислений
  firstNumber = result.toString();
  // Очищаем второе число и текущий оператор
  secondNumber = "";
  currentOperator = "";
}

// Добавляем обработчик события "click" на кнопку "C" (очистка)
clearButton.addEventListener("click", () => {
  // Вызываем функцию для очистки дисплея и всех переменных
  clearDisplay();
});

// Функция для очистки дисплея и всех переменных
function clearDisplay() {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
  waitingForSecondNumber = false;
}
