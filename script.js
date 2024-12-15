// Получаем все элементы, которые можно перетаскивать
const dragItems = document.querySelectorAll(".answers div");

// Добавляем обработчики событий для перетаскивания
dragItems.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
});

// Функция, вызываемая при начале перетаскивания
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

// Получаем все зоны для сброса
const dropZones = document.querySelectorAll(".drop-zone");

// Добавляем обработчики событий для зон сброса
dropZones.forEach((zone) => {
  zone.addEventListener("dragover", dragOver);
  zone.addEventListener("drop", drop);
});

// Функция, вызываемая при наведении на зону сброса
function dragOver(event) {
  event.preventDefault();
}

// Функция, вызываемая при сбросе элемента
function drop(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData("text/plain");
  const dragItem = document.getElementById(id);
  event.target.append(dragItem);
}

// Кнопка для проверки ответов
document.getElementById("check-answers").addEventListener("click", () => {
  const correctAnswers = {
    "drop-zone-1": "drag-item-1", // Вопрос 1: ===
    "drop-zone-2": "drag-item-2", // Вопрос 2: NaN
  };

  let score = 0;

  // Перебрать все зоны сброса (drop zones).Для каждой зоны:
  //Получить ID зоны.
  //Найти элемент, который был сброшен в эту зону.
  //Сравнить ID сброшенного элемента с правильным ответом.
  //Если ответ правильный, увеличить счетчик правильных ответов.

  dropZones.forEach((zone) => {
    // это коллекция всех элементов с классом drop-zone (зоны для сброса ответов).
    const zoneId = zone.id; // Получаем уникальный идентификатор текущей зоны сброса. Например, если текущая зона имеет id="drop-zone-1", то zoneId будет равен "drop-zone-1".
    const droppedItem = zone.querySelector('[id^="drag-item-"]'); // Ищем внутри текущей зоны сброса элемент с "drag-item-" (это элемент, который был сброшен в зону).
    console.log(zoneId);
    console.log(droppedItem.id);
    console.log(correctAnswers[zoneId]);
    if (droppedItem && droppedItem.id === correctAnswers[zoneId]) {
      // Проверяем, есть ли в зоне сброса элемент (droppedItem не равен null). Сравниваем id сброшенного элемента (droppedItem.id) с правильным ответом для текущей зоны (correctAnswers[zoneId]).

      score++;
    }
  });

  const resultText =
    score === 2 ? "Все ответы верные!" : `Правильных ответов: ${score}`;
  document.getElementById("result").textContent = resultText;
});
