export function createText(todo) {
  const textElement = document.createElement("p");
  textElement.textContent = todo.text;
  textElement.style.textDecoration = todo.completed ? "line-through" : "none";

  return textElement;
}
