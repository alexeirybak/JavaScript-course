const overlay = document.getElementById("overlay");

export function showError(message) {
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

export function showLoader() {
  overlay.style.display = "flex";
}

export function hideLoader() {
  overlay.style.display = "none";
}
