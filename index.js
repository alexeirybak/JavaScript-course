const childRolesEl = document.getElementById("roles-children");
const input = document.getElementById("oneMoreChild");
const button = document.getElementById("addChildButton");
let numberChildren = childRolesEl.children.length;
 
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addChild();
  }
});
 
button.addEventListener("click", () => {
  addChild();
});
 
function addChild() {
  const oneMoreChildInputText = input.value.trim();
 
  if (oneMoreChildInputText !== "") {
    childRolesEl.innerHTML += `<li class="item">${oneMoreChildInputText} <button class="delete-button">Удалить</button></li>`;
 
    // Навешиваем обработчик на все кнопки удаления
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        numberChildren--;
        button.disabled = false;
      });
    });
  }
 
  input.value = "";
 
  numberChildren++;
 
  if (numberChildren === 5) button.disabled = true;
}