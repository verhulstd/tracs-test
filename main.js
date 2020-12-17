import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";

import "./style.css";

class App extends React.Component {
  state = {
    todos: [],
  };
  addTodo = (str) => {
    const newTodo = {
      todo: str,
      checked: false,
      id: uuid(),
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };
  removeTodo = (id) => {
    const filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      ...this.state,
      todos: filteredTodos,
    });
  };
  toggleCheck = (id) => {
    const changedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    this.setState({
      ...this.state,
      todos: changedTodos,
    });
  };
  render() {
    return (
      <>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggleCheck={this.toggleCheck}
          removeTodo={this.removeTodo}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
