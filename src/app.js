import {
  initDragAndDrop,
  initDeleteCompleted,
  initAddTodo,
  initChangeStatus,
  initDelete,
  updateTask,
  initDownload,
  downloadButton,
  renderData,
} from "./components/index.js";

import { getTodos } from "./API/index.js";

import { showError, showLoader, hideLoader } from "./utils/helpers.js";

export const container = document.getElementById("posts-container");


export async function loadData() {
  try {
    showLoader();
    const todos = await getTodos();

    renderData(todos, container);
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

initAddTodo();
initDeleteCompleted(container);
initDownload();
