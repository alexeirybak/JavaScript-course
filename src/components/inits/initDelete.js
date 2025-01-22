import { deleteTodo } from "../../API/index.js";
import { showConfirmation, showError } from "../../utils/notification.js";

export function initDelete(todo, deleteButton) {
  deleteButton.addEventListener("click", async () => {
    const isConfirmed = await showConfirmation(
      "Вы уверены, что хотите удалить эту задачу навсегда?"
    );
    if (!isConfirmed) {
      return;
    }

    try {
      await deleteTodo(todo.id);

      deleteButton.closest(".todo").remove();
    } catch (error) {
      console.error(error.message);
      showError("Не удалось удалить задачу");
    }
  });
}
