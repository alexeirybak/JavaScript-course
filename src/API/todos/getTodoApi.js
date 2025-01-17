import { host } from "../host.js";

export async function getTodos(uid, token) {
  try {
    const response = await fetch(`${host}/${uid}.json?auth=${token}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Данные не получены. Статус: ${response.status}`);
    }

    const data = await response.json();
    console.log("Данные получены:", data);

    if (!data) {
      return [];
    }

    // Преобразуем объект в массив
    const todosArray = Object.keys(data).map((key) => ({
      id: key, // Добавляем id задачи
      ...data[key], // Копируем остальные свойства задачи
    }));

    todosArray.sort((a, b) => (a.order || 0) - (b.order || 0));

    return todosArray;
  } catch (error) {
    console.error(`Ошибка получения данных:`, error.message);
    throw error;
  }
}
