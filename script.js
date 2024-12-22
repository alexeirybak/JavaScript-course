const blanks = document.querySelectorAll(".blank");
const parts = document.querySelector(".parts");
const dragItems = document.querySelectorAll(".drag-item");
const checkButton = document.getElementById("check-puzzles");
const result = document.getElementById("result");

blanks.forEach((blank) => {
  blank.draggable = "true";
});

const shuffledItems = Array.from(dragItems).sort(() => Math.random() - 0.5);

shuffledItems.forEach((item) => parts.append(item));

dragItems.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
});

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

blanks.forEach((blank) => {
  blank.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  blank.addEventListener("drop", drop);
});

function drop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const draggedItem = document.getElementById(id);

  const targetBlank = e.target.closest(".blank");
  if (!e.target) return;

  const existingPuzzle = targetBlank.querySelector(".drag-item");
  if (existingPuzzle) {
    parts.append(existingPuzzle);
  }

  targetBlank.append(draggedItem);
}

checkButton.addEventListener("click", () => {
  let isCorrect = true;
  blanks.forEach((blank, index) => {
    const puzzle = blank.firstChild;
    if (!puzzle || puzzle.id !== `item-${index + 1}`) {
      isCorrect = false;
    }
  });

  if (isCorrect) {
    window.location.href = "site.html";
  } else {
    result.textContent = "Пазл собран неправильно. Попробуйте еще раз";
  }
});
