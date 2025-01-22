import { showError } from "../../utils/notification.js";
import { loadData } from "../index.js";
import { updateTodo } from "../../API/index.js";

export async function updateTask(todo) {
  const { value: newText } = await Swal.fire({
    title: "Редактирование задачи",
    input: "text",
    inputLabel: "Введите текст новой задачи",
    inputValue: todo.text,
    showCancelButton: true,
    confirmButtonText: "Сохранить",
    cancelButtonText: "Отмена",
    inputValidator: (value) => {
      if (!value) {
        return "Поле не может быть пустым!";
      }
    },
  });

  if (newText) {
    try {
      await updateTodo(todo.id, newText);
      await loadData();
    } catch (error) {
      showError("Не удалось обновить задачу");
    }
  }
}
