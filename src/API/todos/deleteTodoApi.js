import { host } from "../host.js";
import { getUserInfo } from "../../utils/authHelper.js";


export async function deleteTodo(id) {
  try {
    const { uid, token } = await getUserInfo();

    const response = await fetch(`${host}/${uid}/${id}.json?auth=${token}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Не удалось удалить задачу. Статус: ${response.status}`);
    }

    console.log("Задача удалена");

    return true;
  } catch (error) {
    throw error;
  }
}
