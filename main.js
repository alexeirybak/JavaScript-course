import { apiService } from "./API/apiService.js";
import { domService } from "./domService.js";

async function loadData() {
  try {
    domService.showLoader();
    const todos = await apiService.getTodos();
    renderData(todos);
  } catch (error) {
    console.error(error.message);
    domService.showError(error.message === "Задач нет" ? "Задач нет" : "Не удалось получить данные");
  } finally {
    domService.hideLoader();
  }
}

function renderData(todos) {
  domService.container.innerHTML = "";

  const hasCompletedTodos = todos.some((todo) => todo.completed);
  domService.deleteCompletedButton.style.display = hasCompletedTodos ? "block" : "none";

  todos.forEach((todo) => {
    const { todoElement, checkbox, deleteButton, updateButton } = domService.renderTodo(todo);

    checkbox.addEventListener("change", async () => {
      try {
        await apiService.toggleTodoStatus(todo.id, checkbox.checked);
        await loadData();
      } catch (error) {
        console.error(error.message);
        domService.showError("Не удалось изменить статус задачи");
      }
    });

    deleteButton.addEventListener("click", async () => {
      try {
        await apiService.deleteTodo(todo.id);
        await loadData();
      } catch (error) {
        console.error(error.message);
        domService.showError("Не удалось удалить задачу");
      }
    });

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
          await apiService.updateTodo(todo.id, newText);
          await loadData();
        } catch (error) {
          domService.showError("Не удалось обновить задачу");
        }
      }
    });

    addDragAndDropListeners(todoElement, todo);
  });
}

async function addNewTodo() {
  const newTodoText = domService.taskInput.value.trim();

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
    await apiService.addTodo(newTodo);
    domService.taskInput.value = "";
    await loadData();
  } catch (error) {
    console.error(error.message);
    domService.showError("Не удалось добавить задачу");
  }
}

domService.addButton.addEventListener("click", addNewTodo);

domService.taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewTodo();
  }
});

domService.downloadButton.addEventListener("click", loadData);

domService.deleteCompletedButton.addEventListener("click", async () => {
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

  if (isConfirmed) {
    try {
      await apiService.deleteCompletedTodos();
      await loadData();
    } catch (error) {
      console.error(error.message);
      domService.showError("Не удалось удалить список задач");
    }
  }
});

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
        domService.container.insertBefore(draggable, overElement);
      } else {
        domService.container.insertBefore(draggable, overElement.nextSibling);
      }
    }
  });

  todoElement.addEventListener("dragend", (event) => {
    event.currentTarget.classList.remove("dragging");
    updateTaskOrder();
  });
}

async function updateTaskOrder() {
  const todos = [...domService.container.querySelectorAll(".todo")];
  const updatedOrder = todos.map((todo, index) => ({
    id: todo.getAttribute("data-id"),
    order: index + 1,
  }));

  try {
    domService.showLoader();
    for (const task of updatedOrder) {
      await apiService.updateTaskOrder(task.id, task.order);
    }
    console.log("Порядок задач обновлен");
  } catch (error) {
    console.error(error.message);
    domService.showError("Не удалось переместить элемент");
  } finally {
    domService.hideLoader();
  }
}

// Инициализация
// loadData();
