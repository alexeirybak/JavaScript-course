const blockEl = document.getElementById("content");

let question = +prompt("Сколько Вам лет", 18);

//let message = question >= 18 ? "Доступ разрешен" : "Доступ ограничен";
let message = "Доступ " + (question >= 18 ? "разрешен" : "ограничен");

let className = question >= 18 ? "block-access" : "block-restricted";

blockEl.innerHTML = `<div class="block ${className}">${message}</div>`;
