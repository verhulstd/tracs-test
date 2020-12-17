import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";

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
  render() {
    return (
      <>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
