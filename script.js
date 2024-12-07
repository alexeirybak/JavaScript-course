const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  setTimeout(() => {
    closeModalBtn.style.visibility = "visible";
  }, 2000);
});

closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  detachModalEvents();
}

function detachModalEvents() {
  closeModalBtn.removeEventListener("click", closeModal);
}

window.addEventListener("click", (event) => {
  console.log(event.target);

  if (event.target === modal) {
    modal.style.display = "none";
    detachModalEvents();
  }
});
