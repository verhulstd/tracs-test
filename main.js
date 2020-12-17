import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
