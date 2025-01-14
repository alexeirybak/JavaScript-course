import {
  initChangeStatus,
  initDragAndDrop,
  initDelete,
  downloadButton,
} from "../index.js";
import { hideLoader } from "../../utils/helpers.js";

export const deleteCompletedButton = document.getElementById(
  "delete-completed-button"
);
export function renderData(todos, container) {
  container.innerHTML = "";

  const hasCompletedTodos = todos.some((todo) => todo.completed);

  deleteCompletedButton.style.display = hasCompletedTodos ? "block" : "none";

  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");
    todoElement.setAttribute("data-id", todo.id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    initChangeStatus(todo, checkbox);

    const textElement = document.createElement("p");
    textElement.textContent = todo.text;
    textElement.style.textDecoration = todo.completed ? "line-through" : "none";

    const timeElement = document.createElement("p");
    timeElement.textContent = new Date(todo.createdAt).toLocaleString("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button-function");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./assets/icons/icon-delete.png";
    deleteIcon.alt = "Удалить";
    deleteIcon.title = "Удалить";

    deleteButton.append(deleteIcon);

    initDelete(todo, deleteButton);

    const updateButton = document.createElement("button");
    updateButton.classList.add("button-function");

    const updateIcon = document.createElement("img");
    updateIcon.src = "./assets/icons/icon-update.png";
    updateIcon.alt = "Изменить";
    updateIcon.title = "Изменить";

    updateButton.append(updateIcon);

    updateButton.addEventListener("click", () => updateTask(todo));

    todoElement.append(
      checkbox,
      textElement,
      timeElement,
      deleteButton,
      updateButton
    );

    initDragAndDrop(todoElement, todo, container);
    container.append(todoElement);
    downloadButton.hidden = true;
    hideLoader();
  });
}
