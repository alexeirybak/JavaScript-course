export function createTime(todo) {
  const timeElement = document.createElement("p");
  timeElement.textContent = new Date(todo.createdAt).toLocaleString("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return timeElement;
}
