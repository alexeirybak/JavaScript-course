// 1. Получаем все элементы с классом "answer"
const answers = document.querySelectorAll(".answer");

// 2. Добавляем обработчик события на каждый элемента с классом "answer"
answers.forEach((answer, index) => {
  // 3. Порядковый номер элемента с классом "answer" - это index
  answer.addEventListener("click", () => {

    // 11. Вариант hard: снимаем выделение с других ответов
    answers.forEach((otherAnswer) => {
      otherAnswer.style.backgroundColor = "#f0f0f0";
      otherAnswer.style.color = "#000";
    });

    // 4. Выделяем выбранный ответ, меняя стили 
    answer.style.backgroundColor = "#007bff";
    answer.style.color = "#fff";

    let isCorrectByIndex; // 7. Объявляем переменную, которая будет менять значение с false на true при правильном ответе

    // 5. Проверяем порядковый номер ответа
    if (index === 1) {
      // 6. Второй вариант ответа, потому что нумерация начинается с 0
      isCorrectByIndex = true; // 8. Присваиваем значение переменной в зависимости от верности или неверности ответа
    } else {
      isCorrectByIndex = false;
    }

    // 9. Получаем элемент для отображения результата
    const resultElement = document.querySelector(".result");

    // 10. Отображаем результат
    if (isCorrectByIndex) {
      resultElement.innerText = "Правильно!";
    } else {
      resultElement.innerText = "Неправильно!";
    }
  });
});
