import { getTodos } from "../../API/index.js";
import { renderData } from "../index.js";
import { showError, showLoader, hideLoader } from "../../utils/helpers.js";

export async function loadData() {
  try {
    showLoader();
    const todos = await getTodos();

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
