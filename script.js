const tasksListElement = document.querySelector(".list");
const taskElements = document.querySelectorAll(".item");
const checkBtn = document.getElementById("checkBtn");

for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener("dragstart", (e) => {
  e.target.classList.add("selected");
});

tasksListElement.addEventListener("dragend", (e) => {
  e.target.classList.remove("selected");
});

tasksListElement.addEventListener("dragover", (e) => {
  e.preventDefault();

  const activeElement = document.querySelector(".selected");

  const currentElement = e.target;

  const isMoveable =
    activeElement !== currentElement &&
    currentElement.classList.contains("item");

  if (!isMoveable) return;
  // const nextElement =
  //   currentElement === activeElement.nextElementSibling
  //     ? currentElement.nextElementSibling
  //     : currentElement;

  let nextElement;
  if (currentElement === activeElement.nextElementSibling) {
    nextElement = currentElement.nextElementSibling;
  } else {
    nextElement = currentElement;
  }

  tasksListElement.insertBefore(activeElement, nextElement);
});

const checkOrder = () => {
  const checkArr = [
    "Встать",
    "Умыться",
    "Позавтракать",
    "Одеться",
    "Выйти из дома",
  ];

  const order = [];

  const currentTaskElements = tasksListElement.querySelectorAll(".item");

  currentTaskElements.forEach((task) => {
    order.push(task.textContent);
  });

  const isOrderCorrect = JSON.stringify(order) === JSON.stringify(checkArr);

  if (isOrderCorrect) {
    alert("Порядок правильный");
  } else {
    alert("Порядок неправильный");
  }
};

checkBtn.addEventListener("click", checkOrder);
