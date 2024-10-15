const num1 = parseFloat(prompt("Введите первое число:"));
const num2 = parseFloat(prompt("Введите второе число:"));
const errorMessageElement = document.getElementById("error-message");
const afterErrorElement = document.getElementById("after-error-message");
let result;

function calc(num1, num2) {
  if (num2 === 0) {
    throw new Error("Деление на ноль невозможно!");
  }
  return num1 / num2;
}

try {
  calc(num1, num2);
  console.log(`Результат деления: ${result}`);
} catch (error) {
  errorMessageElement.textContent = `Ошибка: ${error.name}`;
  console.error(`Ошибка: ${error}`);
  console.error(`Ошибка: ${error.name}`);
  console.error(`Ошибка: ${error.message}`);
} finally {
  afterErrorElement.textContent = `Повторите правила деления`;
  console.log("Продолжение выполнения скрипта.");
}

console.log("Продолжение выполнения скрипта.");
