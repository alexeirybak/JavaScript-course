import { showError } from "../../utils/notification.js";
import { addTodo } from "../../API/index.js";
import { loadData } from "../index.js";

export async function addNewTodo(taskInput) {
  const newTodoText = taskInput.value.trim();

  if (!newTodoText) {
    alert("Введите текст задачи!");
    return;
  }

  const newTodo = {
    text: newTodoText,
    createdAt: Date.now(),
    completed: false,
  };

  try {
    await addTodo(newTodo);
    console.log("Задача добавлена");
    taskInput.value = "";
    await loadData();
  } catch (error) {
    console.error(error.message);
    showError("Не удалось добавить задачу");
  }
}
