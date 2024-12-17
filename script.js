const dragItems = document.querySelectorAll(".drag-item");
const blanks = document.querySelectorAll(".blank");
const sentences = document.querySelectorAll(".sentence");

dragItems.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
});

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

blanks.forEach((blank) => {
  blank.addEventListener("drop", drop);
  blank.addEventListener("dragover", dragOver);
});

function drop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const dragItem = document.getElementById(id);

  const optionsContainer = e.target
    .closest(".question")
    .querySelector(".options");

  const allowedAnswers = Array.from(
    optionsContainer.querySelectorAll(".drag-item")
  ).map((item) => item.textContent);

  if (!allowedAnswers.includes(dragItem.textContent)) {
    alert("Ответ к вопросу не относится");
  }
  e.target.append(dragItem);
}

function dragOver(e) {
  e.preventDefault();

  const existingAnswer = e.target.querySelector(".drag-item");

  if (existingAnswer) {
    const optionsContainer = e.target
      .closest(".question")
      .querySelector(".options");
    optionsContainer.append(existingAnswer);
  }
}

sentences.forEach((sentence) => {
  sentence.addEventListener("dragover", dragOverQuestion);
  sentence.addEventListener("dragleave", dragLeave);
});

function dragOverQuestion(e) {
  e.target.classList.add("active");
}

function dragLeave(e) {
  e.target.classList.remove("active");
}

// Обработчик кнопки "Check Answers"
document.getElementById("check-answers").addEventListener("click", () => {
  const correctAnswers = {
    "blank-1": "ёлка",
    "blank-2": "лук",
  };

  let correctCount = 0; // Счетчик правильных ответов
  let totalQuestions = Object.keys(correctAnswers).length; // Общее количество вопросов

  blanks.forEach((blank) => {
    const userAnswer = blank.querySelector(".drag-item");
    const blankId = blank.id;

    if (userAnswer) {
      const isCorrect =
        userAnswer.textContent === correctAnswers[blankId];

      if (isCorrect) {
        userAnswer.style.backgroundColor = ""; // Сбрасываем цвет, если ответ верный
        correctCount++; // Увеличиваем счетчик правильных ответов
      } else {
        userAnswer.style.backgroundColor = "red"; // Подсвечиваем неправильный ответ
      }
    }
  });

  // Вычисляем процент правильных ответов
  const percentageCorrect = ((correctCount / totalQuestions) * 100).toFixed();

  // Формируем результат
  const resultText =
    correctCount === totalQuestions
      ? `Все ответы верны! (${correctCount} из ${totalQuestions}, ${percentageCorrect}%)`
      : `Количество правильных ответов: ${correctCount} из ${totalQuestions}. Процент правильных ответов: ${percentageCorrect}%`;

  // Выводим результат
  document.getElementById("result").textContent = resultText;
});
