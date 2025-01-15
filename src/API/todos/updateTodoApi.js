import { host } from "../host.js";

export async function updateTodo(id, newText) {
  try {
    const response = await fetch(`${host}/${id}.json`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newText }),
    });

    if (!response.ok) {
      throw new Error(`Не удалось обновить задачу. Статус: ${response.status}`);
    }

    console.log("Текст задачи обновлен");
    return true;
  } catch (error) {
    console.error(`Ошибка обновления текста задачи:`, error.message);
    throw error;
  }
}
