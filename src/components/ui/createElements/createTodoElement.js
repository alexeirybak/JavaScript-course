import { createCheckbox } from "./createCheckBox.js";
import { createText } from "./createText.js";
import { createTime } from "./createTime.js";
import { createUpdateButton } from "./createUpdateButton.js";
import { createDeleteButton } from "./createDeleteButton.js";
import { initDragAndDrop } from "../../index.js";

export function createTodoElement(todo, container) {
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");
  todoElement.setAttribute("data-id", todo.id);

  const checkbox = createCheckbox(todo);
  const textElement = createText(todo);
  const timeElement = createTime(todo);
  const deleteButton = createDeleteButton(todo);
  const updateButton = createUpdateButton(todo);

  todoElement.append(
    checkbox,
    textElement,
    timeElement,
    deleteButton,
    updateButton
  );

  initDragAndDrop(todoElement, todo, container);
  return todoElement;
}