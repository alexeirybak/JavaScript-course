import { host, SUPABASE_KEY } from "../host.js";

export async function toggleTodoStatus(id, completed) {
  try {
    const response = await fetch(`${host}?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_KEY}`,
        apikey: SUPABASE_KEY,
      },
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
