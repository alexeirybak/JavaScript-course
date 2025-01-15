import { host, SUPABASE_KEY } from "../host.js";

export async function deleteTodo(id) {
  try {
    const response = await fetch(`${host}?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "apikey": SUPABASE_KEY,
      },
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
