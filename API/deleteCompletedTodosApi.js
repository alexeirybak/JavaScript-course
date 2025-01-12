import { host } from "./apiService.js";

export async function deleteCompletedTodos() {
  try {
    // Получаем все задачи
    const response = await fetch(host);
    if (!response.ok) {
      throw new Error("Не удалось загрузить задачи");
    }

    const todos = await response.json();

    // Фильтруем выполненные задачи
    const completedTodos = todos.filter((todo) => todo.completed);

    // Удаляем каждую выполненную задачу
    for (const todo of completedTodos) {
      const deleteResponse = await fetch(`${host}/${todo.id}`, {
        method: "DELETE",
      });

      if (!deleteResponse.ok) {
        throw new Error(
          `Не удалось удалить задачу с ID ${todo.id}. Статус: ${deleteResponse.status}`
        );
      }
    }

    return true;
  } catch (error) {
    console.error("Ошибка удаления выполненных задач:", error.message);
    throw error;
  }
}
