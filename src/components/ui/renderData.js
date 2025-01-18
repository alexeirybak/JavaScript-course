import { hideLoader } from "../../utils/helpers.js";
import { createTodoElement } from "./createElements/createTodoElement.js";

export const container = document.getElementById("posts-container");
export const deleteCompletedButton = document.getElementById(
  "delete-completed-button"
);
export function renderData(todos) {
  container.innerHTML = "";

  const hasCompletedTodos = todos.some((todo) => todo.completed);

  deleteCompletedButton.style.display = hasCompletedTodos ? "block" : "none";

  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo, container);
    container.append(todoElement);
  });

  hideLoader();
}
