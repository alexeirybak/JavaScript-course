import { deleteTodo } from "../../API/index.js";
import { loadData } from "../index.js";
import { showError } from "../../utils/helpers.js";

export function initDelete(todo, deleteButton) {
  deleteButton.addEventListener("click", async () => {
    try {
      await deleteTodo(todo.id);
      await loadData();
    } catch (error) {
      console.error(error.message);
      showError("Не удалось удалить задачу");
    }
  });
}
