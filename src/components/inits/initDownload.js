import { loadData } from "../../app.js";

export const downloadButton = document.querySelector(".button-download");
export function initDownload() {
  downloadButton.addEventListener("click", loadData);
}
