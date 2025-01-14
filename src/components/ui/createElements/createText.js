export function createText(todo, updateButton) {
  const textElement = document.createElement("div");
  textElement.classList.add("text-element");

  const textParagraph = document.createElement("p");
  textParagraph.textContent = todo.text;
  textParagraph.style.textDecoration = todo.completed ? "line-through" : "none";
  textElement.append(textParagraph, updateButton);

  return textElement;
}
