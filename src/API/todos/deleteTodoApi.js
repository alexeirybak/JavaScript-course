import { host } from "../host.js";

export async function deleteTodo(id) {
  try {
    const userId = localStorage.getItem("userId");
    const response = await fetch(`${host}/${userId}/${id}.json`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Не удалось удалить задачу. Статус: ${response.status}`);
    }

    console.log("Задача удалена");

    return true;
  } catch (error) {
    console.error(`Ошибка удаления:`, error.message);
    throw error;
  }
}
