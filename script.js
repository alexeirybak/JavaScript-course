const container = document.getElementById("posts-container");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const downloadButton = document.querySelector(".button-download");
const overlay = document.getElementById("overlay");

const host = "https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos";

async function getData() {
  try {
    showLoader();
    const response = await fetch(host, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Данные не получены. Статус: ${response.status}`);
    }

    const data = await response.json();
    console.log("Данные получены:", data);
    renderData(data);
  } catch (error) {
    console.error(`Ошибка получения данных:`, error.message);
  }
}

function renderData(todos) {
  container.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", () =>
      toggleTodoStatus(todo.id, checkbox.checked)
    );

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

    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    const updateButton = document.createElement("button");
    updateButton.classList.add("button-function");

    const updateIcon = document.createElement("img");
    updateIcon.src = "images/icon-update.png";
    updateIcon.alt = "Изменить";
    updateIcon.title = "Изменить";

    updateButton.append(updateIcon);

    updateButton.addEventListener("click", () => {
      const newText = prompt("Введите новый текст задачи:", todo.text);
      if (newText) {
        updateTodo(todo.id, newText);
      }
    });

    todoElement.append(
      checkbox,
      textElement,
      timeElement,
      deleteButton,
      updateButton
    );

    container.append(todoElement);
    downloadButton.hidden = true;
    hideLoader();
  });
}

async function deleteTodo(id) {
  try {
    const response = await fetch(`${host}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Не удалось удалить задачу. Статус: ${response.status}`);
    }

    console.log("Задача удалена:", data);
    getData();
  } catch (error) {
    console.error(`Ошибка удаления:`, error.message);
  }
}

async function toggleTodoStatus(id, completed) {
  try {
    const response = await fetch(`${host}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    });

    if (!response.ok) {
      throw new Error(
        `Не удалось обновить статус задачи. Статус: ${response.status}`
      );
    }

    console.log("Статус задачи обновлен");
    getData();
  } catch (error) {
    console.error(`Ошибка обновления статуса задачи:`, error.message);
  }
}

async function addTodo() {
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
    const response = await fetch(`${host}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) {
      throw new Error(`Не удалось добавить задачу. Статус: ${response.status}`);
    }

    console.log("Задача добавлена");
    taskInput.value = ""; // Еще очищаем поле ввода новой задачи
    getData();
  } catch (error) {
    console.error(`Ошибка добавления:`, error.message);
  }
}

async function updateTodo(id, newText) {
  try {
    const response = await fetch(`${host}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newText }),
    });

    if (!response.ok) {
      throw new Error(`Не удалось обновить задачу. Статус: ${response.status}`);
    }

    console.log("Текст задачи обновлен");
    getData();
  } catch (error) {
    console.error(`Ошибка обновления текста задачи:`, error.message);
  }
}

addButton.addEventListener("click", addTodo);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

downloadButton.addEventListener("click", getData);

function showLoader() {
  overlay.style.display = "flex";
}

function hideLoader() {
  overlay.style.display = "none";
}
