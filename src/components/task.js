import React from "react";

function Task({ task, onUpdate, onDelete }) {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.name}</td>
      <td>{task.date}</td>
      <td>{task.hour}</td>
      <td>
        <button onClick={() => onUpdate(task.id)}>Update</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Task;
