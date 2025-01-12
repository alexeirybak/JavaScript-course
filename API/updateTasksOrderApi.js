import { host } from "./apiService.js";

export async function updateTaskOrderOnServer(taskId, order) {
  try {
    const response = await fetch(`${host}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
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
