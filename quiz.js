// 1. Получаем все элементы с классом "answer"
const answers = document.querySelectorAll(".answer");

// Получаем элемент для отображения результата
const resultElement = document.querySelector(".result");

// 2. Добавляем обработчик события на каждый элемента с классом "answer"
answers.forEach((answer, index) => { // 3. Порядковый номер элемента с классом "answer" - это index
  answer.addEventListener("click", () => {
    // 4. Выделяем выбранный ответ, меняя стили
    answer.style.backgroundColor = "#007bff";
    answer.style.color = "#fff";

    let isCorrectByIndex; // 7. Объявляем переменную, которая будет менять значение с false на true при правильном ответе

    // 5. Проверяем порядковый номер ответа
    if (index === 1) { // 6. Второй вариант ответа, потому что нумерация начинается с 0
      isCorrectByIndex = true; // 8. Присваиваем значение переменной в зависимости от верности или неверности ответа
    } else {
      isCorrectByIndex = false;
    }

    // Отображаем результат
    if (isCorrectByIndex) { // Иннервируем результат
      resultElement.innerText = "Правильно!";
    } else {
      resultElement.innerText = "Неправильно!";
    }
  });
});
