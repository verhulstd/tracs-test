import React from "react";
import TodoItem from "./TodoItem";

export default ({ todos, removeTodo, toggleCheck }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        toggleCheck={toggleCheck}
      />
    ))}
  </ul>
);
