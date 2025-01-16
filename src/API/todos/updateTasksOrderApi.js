import { host } from "../host.js";

export async function updateTaskOrderOnServer(taskId, order) {
  try {
    const userId = localStorage.getItem("userId");

    const response = await fetch(`${host}/${userId}/${taskId}.json`, {
      method: "PATCH",
      body: JSON.stringify({ order }),
    });

    if (!response.ok) {
      throw new Error(
        `Не удалось обновить порядок задач. Статус: ${response.status}`
      );
    }
  } catch (error) {
    console.error(`Ошибка обновления порядка задач:`, error.message);
    throw error;
  }
}
