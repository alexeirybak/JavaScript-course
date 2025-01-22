const overlay = document.getElementById("overlay");

export function showLoader() {
  overlay.style.display = "flex";
}

export function hideLoader() {
  overlay.style.display = "none";
}
