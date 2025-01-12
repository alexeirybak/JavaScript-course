export const domService = {
  container: document.getElementById("posts-container"),
  taskInput: document.getElementById("task-input"),
  addButton: document.getElementById("add-button"),
  downloadButton: document.querySelector(".button-download"),
  overlay: document.getElementById("overlay"),
  deleteCompletedButton: document.getElementById("delete-completed-button"),

  showLoader() {
    this.overlay.style.display = "flex";
  },

  hideLoader() {
    this.overlay.style.display = "none";
  },

  showError(message) {
    const icon = message === "Задач нет" ? "info" : "error";
    const title = message === "Задач нет" ? "Информация" : "Ошибка";
    const text = message === "Задач нет" ? "У Вас нет задач" : message;

    Swal.fire({
      title,
      text,
      icon,
      showConfirmButton: true,
    });
  },

  renderTodo(todo) {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");
    todoElement.setAttribute("data-id", todo.id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

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

    const deleteButton = this.createButton(
      "./images/icon-delete.png",
      "Удалить 11",
      "Удалить11"
    );
    const updateButton = this.createButton(
      "./images/icon-update.png",
      "Изменить",
      "Изменить"
    );

    todoElement.append(
      checkbox,
      textElement,
      timeElement,
      deleteButton,
      updateButton
    );
    this.container.append(todoElement);

    return { todoElement, checkbox, deleteButton, updateButton };
  },

  createButton(iconSrc, alt, title) {
    const button = document.createElement("button");
    button.classList.add("button-function");

    const icon = document.createElement("img");
    icon.src = iconSrc;
    icon.alt = alt;
    icon.title = title;

    button.append(icon);
    this.downloadButton.style.display = "none";
    return button;
  },
};
