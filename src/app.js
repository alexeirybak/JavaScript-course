import { initDeleteCompleted, initAddTodo } from "./components/index.js";

initAddTodo();
initDeleteCompleted();

const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const taskContainer = document.getElementById("task-container");

signupForm.style.display = "display";
signinForm.style.display = "none";
taskContainer.style.display = "none";
