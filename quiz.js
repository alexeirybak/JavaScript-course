const answers = document.querySelectorAll(".answer");
const resultElement = document.querySelector(".result");
let selectedAnswer = null;

answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    if (selectedAnswer) {
      selectedAnswer.style.backgroundColor = "#f0f0f0";
      selectedAnswer.style.color = "#000";
    }
    answer.style.backgroundColor = "#007bff";
    answer.style.color = "#fff";

    if (answer.textContent === "12") {
      result.textContent = "Правильно!";
    } else {
      result.textContent = "Неправильно!";
    }

    selectedAnswer = answer;
  });
});
