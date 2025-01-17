import { host } from "../host.js";
import { getUserInfo } from "../../utils/authHelper.js";

export async function addTodo(newTodo) {
  try {
    const { uid, token } = await getUserInfo(); 

    const response = await fetch(`${host}/${uid}.json?auth=${token}`, {
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

    console.log("Задача добавлена");
    return true;
  } catch (error) {
    console.error(`Ошибка добавления:`, error.message);
    throw error;
  }
}
