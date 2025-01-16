import { getTodos } from "../../API/index.js";
import { renderData } from "../index.js";
import { showError, showLoader, hideLoader } from "../../utils/helpers.js";

export async function loadData() {
  try {
    const userId = localStorage.getItem("userId");

    // Если userId отсутствует, выбрасываем ошибку
    if (!userId) {
      throw new Error("Пользователь не авторизован.");
    }

    showLoader();
    const todos = await getTodos(userId); // Передаём userId в getTodos

    renderData(todos);
  } catch (error) {
    console.error(error.message);
    if (error.message === "Задач нет") {
      showError("Задач нет");
    } else {
      showError("Не удалось получить данные");
    }
  } finally {
    hideLoader();
  }
}
