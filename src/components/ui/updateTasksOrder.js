import { updateTaskOrderOnServer } from "../../API/index.js";
import { showLoader, hideLoader } from "../../utils/helpers.js";
import { showError } from "../../utils/notification.js";

export async function updateTasksOrder(container) {
  const todos = [...container.querySelectorAll(".todo")];
  const updatedOrder = todos.map((todo, index) => {
    return {
      id: todo.getAttribute("data-id"),
      order: index + 1,
    };
  });

  try {
    showLoader();
    for (const task of updatedOrder) {
      await updateTaskOrderOnServer(task.id, task.order);
    }

    console.log("Порядок задач обновлен");

    return true;
  } catch (error) {
    console.error(error.message);
    showError("Не удалось переместить элемент");
  } finally {
    hideLoader();
  }
}
