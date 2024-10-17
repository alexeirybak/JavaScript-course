import { quiz } from "./quizData.js";
// Получаем форму, в которую будем добавлять вопросы
const quizForm = document.getElementById("quizForm");
// Создаем пустую строку для хранения HTML-кода
let quizHTML = "";
// Добавляем обработчик события на кнопку
document.getElementById("submitButton").addEventListener("click", submitQuiz);
// Добавляем элемент для вывода результатов
const resultDiv = document.getElementById("result");
// Функция для рендеринга вопросов
function renderQuiz() {
  // Проходим по всем вопросам в викторине
  for (let i = 0; i < quiz.questions.length; i++) {
    // Получаем текущий вопрос
    const question = quiz.questions[i];

    // Создаем HTML для вопроса
    let questionHTML = `<div class="question">
      <p>${i + 1}. ${question.question}</p>`;

    // Проходим по всем вариантам ответа для текущего вопроса
    for (let j = 0; j < question.options.length; j++) {
      // Получаем текущий вариант ответа
      const option = question.options[j];

      // Добавляем HTML для варианта ответа
      // Использование name="question${i}" в HTML-коде для радиокнопок необходимо для того, чтобы браузер понимал, что все радиокнопки с одинаковым именем относятся к одному и тому же вопросу.
      questionHTML += `
        <label>
          <input type="radio" name="question${i}" value="${j}">
          ${option}
        </label>`;
    }

    // Закрываем блок вопроса
    questionHTML += `</div>`;

    // Добавляем HTML для текущего вопроса в общую строку
    quizHTML += questionHTML;
  }

  // Добавляем весь сгенерированный HTML в форму
  quizForm.innerHTML = quizHTML;
}

// Функция для проверки ответов
function submitQuiz() {
  let score = 0;

  quiz.questions.forEach((q, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedOption) {
      const userAnswer = parseInt(selectedOption.value);
      if (userAnswer === q.correctAnswer) {
        score++;
      }
    }
  });

  resultDiv.textContent = `Ваш результат: ${score} из ${quiz.questions.length}`;
}

// Инициализация теста
renderQuiz();
