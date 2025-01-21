import { toggleTodoStatus } from "../../API/index.js";
import { loadData } from "../index.js";
import { showError } from "../../utils/notification.js";

export function initChangeStatus(todo, checkbox) {
  checkbox.addEventListener("change", async () => {
    try {
      await toggleTodoStatus(todo.id, checkbox.checked);
      await loadData();
    } catch (error) {
      console.error(error.message);
      showError("Не удалось изменить статус задачи");
    }
  });
}
