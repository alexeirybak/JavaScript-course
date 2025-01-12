import { getTodos } from "./API/getTodoApi.js";
import { toggleTodoStatus } from "./API/getStatusTodoApi.js";
import { deleteTodo } from "./API/deleteTodoApi.js";
import { updateTodo } from "./API/updateTodoApi.js";
import { addTodo } from "./API/addTodoApi.js";
import { updateTaskOrderOnServer } from "./API/updateTasksOrderApi.js";
import { deleteCompletedTodos } from "./API/deleteCompletedTodosApi.js";

const container = document.getElementById("posts-container");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const downloadButton = document.querySelector(".button-download");
const overlay = document.getElementById("overlay");
const deleteCompletedButton = document.getElementById(
  "delete-completed-button"
);

export const host = "https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos";

async function loadData() {
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

function renderData(todos) {
  container.innerHTML = "";

  const hasCompletedTodos = todos.some((todo) => todo.completed);

  deleteCompletedButton.style.display = hasCompletedTodos ? "block" : "none";

  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");
    todoElement.setAttribute("data-id", todo.id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", async () => {
      try {
        await toggleTodoStatus(todo.id, checkbox.checked);
        await loadData();
      } catch (error) {
        console.error(error.message);
        showError("Не удалось изменить статус задачи");
      }
    });

    const textElement = document.createElement("p");
    textElement.textContent = todo.text;
    textElement.style.textDecoration = todo.completed ? "line-through" : "none";

    const timeElement = document.createElement("p");
    timeElement.textContent = new Date(todo.createdAt).toLocaleString("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button-function");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "images/icon-delete.png";
    deleteIcon.alt = "Удалить";
    deleteIcon.title = "Удалить";

    deleteButton.append(deleteIcon);

    deleteButton.addEventListener("click", async () => {
      try {
        await deleteTodo(todo.id);
        await loadData();
      } catch (error) {
        console.error(error.message);
        showError("Не удалось удалить задачу");
      }
    });

    const updateButton = document.createElement("button");
    updateButton.classList.add("button-function");

    const updateIcon = document.createElement("img");
    updateIcon.src = "images/icon-update.png";
    updateIcon.alt = "Изменить";
    updateIcon.title = "Изменить";

    updateButton.append(updateIcon);

    updateButton.addEventListener("click", async () => {
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
    });

    todoElement.append(
      checkbox,
      textElement,
      timeElement,
      deleteButton,
      updateButton
    );

    addDragAndDropListeners(todoElement, todo);
    container.append(todoElement);
    downloadButton.hidden = true;
    hideLoader();
  });
}

async function addNewTodo() {
  const newTodoText = taskInput.value.trim();

  if (!newTodoText) {
    alert("Введите текст задачи!");
    return;
  }

  const newTodo = {
    text: newTodoText,
    createdAt: Date.now(),
    completed: false,
  };

  try {
    await addTodo(newTodo);
    console.log("Задача добавлена");
    taskInput.value = "";
    await loadData();
  } catch (error) {
    console.error(error.message);
    showError("Не удалось добавить задачу");
  }
}

addButton.addEventListener("click", addNewTodo);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewTodo();
  }
});

downloadButton.addEventListener("click", loadData);

deleteCompletedButton.addEventListener("click", async () => {
  const { isConfirmed } = await Swal.fire({
    title: "Вы уверены?",
    text: "Все выполенные задачи будут удалены!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Да, удалить!",
    cancelButtonText: "Отменить",
  });

  console.log(isConfirmed);

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

function showLoader() {
  overlay.style.display = "flex";
}

function hideLoader() {
  overlay.style.display = "none";
}

function addDragAndDropListeners(todoElement, todo) {
  todoElement.draggable = true;
  todoElement.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", todo.id);
    event.currentTarget.classList.add("dragging");
  });

  todoElement.addEventListener("dragover", (event) => {
    event.preventDefault();
    const draggable = document.querySelector(".dragging");
    const overElement = event.currentTarget;

    if (overElement !== draggable) {
      const rect = overElement.getBoundingClientRect();
      const offset = event.clientY - rect.top;
      if (offset < rect.height / 2) {
        container.insertBefore(draggable, overElement);
      } else {
        container.insertBefore(draggable, overElement.nextSibling);
      }
    }
  });

  todoElement.addEventListener("dragend", (event) => {
    event.currentTarget.classList.remove("dragging");

    updateTaskOrder();
  });
}

async function updateTaskOrder() {
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

function showError(message) {
  const icon = message === "Задач нет" ? "info" : "error";
  const title = message === "Задач нет" ? "Информация" : "Ошибка";
  const text = message === "Задач нет" ? "У Вас нет задач" : message;

  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton: true,
  });
}
