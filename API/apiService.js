import { getTodos } from "./getTodoApi.js";
import { toggleTodoStatus } from "./getStatusTodoApi.js";
import { deleteTodo } from "./deleteTodoApi.js";
import { updateTodo } from "./updateTodoApi.js";
import { addTodo } from "./addTodoApi.js";
import { updateTaskOrderOnServer } from "./updateTasksOrderApi.js";
import { deleteCompletedTodos } from "./deleteCompletedTodosApi.js";

export const host = "https://677e662d94bde1c1252bc48a.mockapi.io/api/v1/todos";

export const apiService = {
  async getTodos() {
    return await getTodos();
  },
  async toggleTodoStatus(id, completed) {
    return await toggleTodoStatus(id, completed);
  },
  async deleteTodo(id) {
    return await deleteTodo(id);
  },
  async updateTodo(id, text) {
    return await updateTodo(id, text);
  },
  async addTodo(todo) {
    return await addTodo(todo);
  },
  async updateTaskOrder(id, order) {
    return await updateTaskOrderOnServer(id, order);
  },
  async deleteCompletedTodos() {
    return await deleteCompletedTodos();
  },
};
