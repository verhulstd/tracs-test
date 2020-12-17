import React from "react";
import classNames from "classnames";

export default function TodoItem({
  todo: { todo, id, checked },
  removeTodo,
  toggleCheck,
}) {
  const classes = classNames({
    todo: true,
    checked,
  });
  return (
    <li className={classes}>
      {todo} ({id} - {checked.toString()})
      <button onClick={(e) => removeTodo(id)}>delete</button>
      <button onClick={(e) => toggleCheck(id)}>check</button>
    </li>
  );
}
