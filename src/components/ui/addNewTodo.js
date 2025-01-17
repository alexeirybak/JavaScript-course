import { showError } from "../../utils/helpers.js";
import { addTodo, getTodos } from "../../API/index.js";
import { loadData } from "../index.js";
import { getUserInfo } from "../../utils/authHelper.js";


export async function addNewTodo(taskInput) {
  const newTodoText = taskInput.value.trim();
  const { uid, token } = await getUserInfo(); 

  if (!newTodoText) {
    alert("Введите текст задачи!");
    return;
  }

  const todos = await getTodos(uid, token);
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
    await loadData(uid);
  } catch (error) {
    console.error(error.message);
    showError("Не удалось добавить задачу");
  }
}
