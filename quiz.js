// Получаем все элементы с классом "answer"
const answers = document.querySelectorAll(".answer");
let isCorrectByIndex;
// Получаем элемент для отображения результата
const resultElement = document.querySelector(".result");

// Добавляем обработчик события на каждый элемент с классом "answer"
answers.forEach((answer, index) => {
  answer.addEventListener("click", () => {
    // Выделяем выбранный ответ
    answer.style.backgroundColor = "#007bff";
    answer.style.color = "#fff";

    // Проверяем порядковый номер ответа
    if (index === 1) {
      isCorrectByIndex = true;
    } else {
      isCorrectByIndex = false;
    }

    // Отображаем результат
    if (isCorrectByIndex) {
      resultElement.innerText = "Правильно!";
    } else {
      resultElement.innerText = "Неправильно!";
    }
  });
});
