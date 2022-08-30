import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/tasks";

function NewTask() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    let task = {
      title,
      name,
      date,
      hour,
    };

    let response = await createTask(task);

    if (response.status === 201) {
      navigate("/");
    }
  }

  return (
    <div className="NewTask">
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

        <button type="submit">Add new task!</button>
      </form>
    </div>
  );
}

export default NewTask;
