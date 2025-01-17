import {
  initDeleteCompleted,
  initAddTodo,
} from "./components/index.js";

initAddTodo();
initDeleteCompleted();

const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");
const taskContainer = document.getElementById("task-container");

signupForm.style.display = "display";
signinForm.style.display = "display";
taskContainer.style.display = "none";

