import { showError } from "../../utils/helpers.js";
import { addTodo, getTodos } from "../../API/index.js";
import { loadData } from "../index.js";

export async function addNewTodo(taskInput) {
  const newTodoText = taskInput.value.trim();

  if (!newTodoText) {
    alert("Введите текст задачи!");
    return;
  }

  const userId = localStorage.getItem("userId");

  const todos = await getTodos(userId);
  const newOrder = todos.length + 1;

  const newTodo = {
    text: newTodoText,
    createdAt: new Date().toISOString(), // Сохраняем дату в формате ISO
    completed: false,
    order: newOrder,
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
