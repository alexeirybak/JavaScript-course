import { showError } from "../../utils/helpers.js";
import { addTodo, getTodos } from "../../API/index.js";
import { loadData } from "../index.js";

export async function addNewTodo(taskInput) {
  const newTodoText = taskInput.value.trim();

  if (!newTodoText) {
    alert("Введите текст задачи!");
    return;
  }

  const todos = await getTodos();
  const newOrder = todos.length + 1; 

  const newTodo = {
    text: newTodoText,
    created_at: new Date().toISOString(),
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
