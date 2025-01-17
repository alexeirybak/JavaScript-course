import { host, SUPABASE_KEY } from "../host.js";

export async function updateTaskOrderOnServer(taskId, order) {
  try {
    const response = await fetch(`${host}?id=eq.${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_KEY}`,
        apikey: SUPABASE_KEY,
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
