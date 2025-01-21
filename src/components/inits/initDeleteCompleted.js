import { showError } from "../../utils/notification.js";
import { deleteCompletedTodos } from "../../API/index.js";
import { deleteCompletedButton, loadData, container } from "../index.js";
import { showConfirmation } from "../../utils/notification.js";

export function initDeleteCompleted() {
  deleteCompletedButton.addEventListener("click", async () => {
    const isConfirmed = await showConfirmation(
      "Все выполненные задачи будут удалены! Вы уверены?"
    );

    if (!isConfirmed) {
      return;
    }

    try {
      await deleteCompletedTodos(container);
      await loadData();
    } catch (error) {
      console.error(error.message);
      showError("Не удалось удалить список задач");
    }
  });
}
