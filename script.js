// Получаем элементы
const dropArea = document.getElementById("drop");
const dragElement = document.getElementById("drag");
const dragImg = document.getElementById("drag-img");

dragElement.addEventListener("dragstart", dragStartHandler);
dragImg.addEventListener("dragstart", dragStartHandler);

function dragStartHandler(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  dragElement.classList.add("dragging");
  dragImg.classList.add("dragging");
}

dragElement.addEventListener("dragend", dragEndHandler);

function dragEndHandler() {
  dragElement.classList.remove("dragging");
}

dropArea.addEventListener("dragenter", dragEnterHandler);

function dragEnterHandler(event) {
  event.preventDefault();
  dropArea.classList.add("dragover");
}

dropArea.addEventListener("dragleave", dragLeaveHandler);

function dragLeaveHandler(event) {
  event.preventDefault();
  dropArea.classList.remove("dragover");
}

dropArea.addEventListener("dragover", dragOverHandler);

function dragOverHandler(event) {
  event.preventDefault();
}

dropArea.addEventListener("drop", dropHandler);

function dropHandler(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData("text/plain");
  console.log(id);
  dragElement.style.backgroundColor = "lightpink";
  dropArea.append(dragElement);
}
