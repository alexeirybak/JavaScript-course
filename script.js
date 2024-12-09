document.addEventListener("DOMContentLoaded", loadTodos);

function loadTodos() {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks;
  };

  const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const tasks = loadTasks();

  const renderTasks = () => {
    const tasksHtml = tasks
      .map((task) => {
        return `   <li class="task">
            <input type="checkbox" ${task.completed ? "checked" : ""}/>
            <span>${task.text}</span>
            <button class="deleteButton">Удалить</button>
            </li>
            `;
      })
      .join("");

    taskList.innerHTML = tasksHtml;

    taskList.querySelectorAll(".deleteButton").forEach((button, index) => {
      button.addEventListener("click", () => {
        //   tasks = tasks.filter((t) => t.id !== tasks[index].id);
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
      });
    });

    taskList
      .querySelectorAll('input[type="checkbox"]')
      .forEach((checkbox, index) => {
        checkbox.addEventListener("change", (event) => {
          tasks[index].completed = event.target.checked;
          saveTasks(tasks);
          renderTasks();
        });
      });
  };

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      tasks.push(newTask);
      saveTasks(tasks);
      renderTasks();
      taskInput.value = "";
    }
  });
  renderTasks();
}
