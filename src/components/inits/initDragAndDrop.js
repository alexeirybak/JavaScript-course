import { updateTasksOrder } from "../index.js";

export function initDragAndDrop(todoElement, todo, container) {
    todoElement.draggable = true;
    todoElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", todo.id);
      event.currentTarget.classList.add("dragging");
    });
  
    todoElement.addEventListener("dragover", (event) => {
      event.preventDefault();
      const draggable = document.querySelector(".dragging");
      const overElement = event.currentTarget;
  
      if (overElement !== draggable) {
        const rect = overElement.getBoundingClientRect();
        const offset = event.clientY - rect.top;
        if (offset < rect.height / 2) {
          container.insertBefore(draggable, overElement);
        } else {
          container.insertBefore(draggable, overElement.nextSibling);
        }
      }
    });
  
    todoElement.addEventListener("dragend", (event) => {
      event.currentTarget.classList.remove("dragging");
  
      updateTasksOrder(container);
    });
  }