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
      const errorText = await response.text(); // Получаем текст ошибки
      console.error("Ошибка от Supabase:", errorText);
      throw new Error(`Не удалось добавить задачу. Статус: ${response.status}`);
    }

    // Проверяем, есть ли тело ответа
    const responseText = await response.text();
    const responseData = responseText ? JSON.parse(responseText) : null;

    console.log("Задача добавлена");
    return responseData;
  } catch (error) {
    console.error(`Ошибка добавления:`, error.message);
    throw error;
  }
}

