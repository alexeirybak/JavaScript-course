import { host } from "../script.js";

export async function getTodos() {
  try {
    const response = await fetch(host, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Данные не получены. Статус: ${response.status}`);
    }

    const data = await response.json();
    data.sort((a, b) => a.order - b.order);
    console.log("Данные получены:", data);
    return data;
  } catch (error) {
    console.error(`Ошибка получения данных:`, error.message);
    throw error;
  }
}
