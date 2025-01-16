import { host } from "../host.js";

export async function toggleTodoStatus(id, completed) {
  try {
    const userId = localStorage.getItem("userId");
    const response = await fetch(`${host}/${userId}/${id}.json`, {
      method: "PATCH",
      body: JSON.stringify({ completed }),
    });

    if (!response.ok) {
      throw new Error(
        `Не удалось обновить статус задачи. Статус: ${response.status}`
      );
    }

    console.log("Статус задачи обновлен");

    return true;
  } catch (error) {
    console.error(`Ошибка обновления статуса задачи:`, error.message);
    throw error;
  }
}
