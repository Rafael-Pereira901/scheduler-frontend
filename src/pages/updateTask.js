import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateTask } from "../services/tasks";

function UpdateTask() {
  const navigate = useNavigate();

  const { state: task } = useLocation();

  const [title, setTitle] = useState(task.title);
  const [name, setName] = useState(task.name);
  const [date, setDate] = useState(task.date);
  const [hour, setHour] = useState(task.hour);

  async function handleSubmit(event) {
    event.preventDefault();

    let updatedTask = {
      title,
      name,
      date,
      hour,
    };

    let response = await updateTask(task.id, updatedTask);

    if (response.status === 200) {
      navigate("/");
    }
  }

  return (
    <div className="UpdateTask">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Task title"
          required
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          placeholder="Task name"
          value={name}
          required
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="date"
          required
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <input
          type="time"
          required
          value={hour}
          onChange={(event) => {
            setHour(event.target.value);
          }}
        />

        <button type="submit">Update task!</button>
      </form>
    </div>
  );
}

export default UpdateTask;
