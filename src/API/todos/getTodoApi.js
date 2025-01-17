import { host } from "../host.js";
import { SUPABASE_KEY } from "../host.js";

export async function getTodos() {
  try {
    const response = await fetch(host, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${SUPABASE_KEY}`,
        apikey: SUPABASE_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Данные не получены. Статус: ${response.status}`);
    }

    const data = await response.json();
    console.log("Данные получены:", data);

    if (data.length === 0) {
      throw new Error("Задач нет");
    }
    data.sort((a, b) => a.order - b.order);
    return data;
  } catch (error) {
    console.error(`Ошибка получения данных:`, error.message);
    throw error;
  }
}
