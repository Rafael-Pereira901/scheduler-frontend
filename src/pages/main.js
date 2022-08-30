import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Task from "../components/task";

import { getTasks, deleteTask } from "../services/tasks";

function Main() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    let response = await getTasks();
    setTasks(response.data);
  }

  async function handleNewTask() {
    navigate("new");
  }

  async function handleUpdateTask(taskId) {
    let task = tasks.find((task) => task.id === taskId);
    navigate("update", { state: task });
  }

  async function handleDeleteTask(taskId) {
    let response = await deleteTask(taskId);

    if (response.status === 200) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  }

  useEffect(() => {
    fetchTasks();
    
  }, []);

  return (
    <div className="Main">
      <table>
        <tr>
          <th>Title</th>
          <th>Name</th>
          <th>Date</th>
          <th>Hour</th>
          <th>Actions</th>
        </tr>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </table>
      <button onClick={handleNewTask}>New task!</button>
    </div>
  );
}

export default Main;
