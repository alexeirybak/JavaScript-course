import { host } from "../host.js";

export async function addTodo(newTodo) {
  try {
    const response = await fetch(`${host}.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) {
      throw new Error(`Не удалось добавить задачу. Статус: ${response.status}`);
    }

    console.log("Задача добавлена");
    return await response.json();
  } catch (error) {
    console.error(`Ошибка добавления:`, error.message);
    throw error;
  }
}
