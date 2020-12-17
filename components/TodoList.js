import React from "react";

export default ({ todos }) => (
  <ul>
    {todos.map(({ todo, id, checked }) => (
      <li>
        {todo} ({id} - {checked.toString()})
      </li>
    ))}
  </ul>
);
