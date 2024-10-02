// 1. Получаем все элементы с классом "answer"
const answers = document.querySelectorAll();

// 2. Добавляем обработчик события на каждый элемента с классом "answer"
answers.forEach((answer, index) => {
  // 3. Порядковый номер элемента с классом "answer" - это index
  answer.addEventListener("click", () => {

    // 11. Вариант hard: снимаем выделение с других ответов

    // 4. Выделяем выбранный ответ, меняя стили 
    answer.style.backgroundColor = "#007bff";
    answer.style.color = "#fff";

    let isCorrectByIndex; // 7. Объявляем переменную, которая будет менять значение с false на true при правильном ответе

    // 5. Проверяем порядковый номер ответа
    if () {
      // 6. Второй вариант ответа, у которого index === 1, правильный
       // 8. Присваиваем значение переменной в зависимости от верности или неверности ответа
    } else {
      
    }

    // 9. Получаем элемент для отображения результата
    const resultElement = document.querySelector();

    // 10. Отображаем результат
    if (isCorrectByIndex) {
     
    } else {
      
    }
  });
});
