import { getTodos } from "../../API/index.js";
import { renderData } from "../index.js";
import { showLoader, hideLoader } from "../../utils/helpers.js";
import { getUserInfo } from "../../utils/authHelper.js";
import { showError, showInfo } from "../../utils/notification.js";

export async function loadData() {
  try {
    showLoader();

    const { uid, token } = await getUserInfo();
    const todos = await getTodos(uid, token);

    if (todos.length === 0) {
      showInfo("У Вас пока нет задач");
    } else {
      renderData(todos);
    }
  } catch (error) {
    console.error(error.message);
    showError("Не удалось получить данные");
  } finally {
    hideLoader();
  }
}
