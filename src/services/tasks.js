import api from "./api";

export async function createTask(task) {
  return await api.post("/tasks", task).then((response) => response);
}

export async function getTasks() {
  return await api.get("/tasks").then((response) => response);
}

export async function updateTask(taskId, task) {

  return await api
    .put("/tasks", task, {
      params: {
        id: taskId,
      },
    })
    .then((response) => response);
}

export async function deleteTask(taskId) {
  return await api
    .delete("/tasks", {
      params: {
        id: taskId,
      },
    })
    .then((response) => response);
}
