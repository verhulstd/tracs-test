import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    addField: "",
  };
  changeHandler = (e) => {
    this.setState({
      ...this.state,
      addField: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.addField);
    this.setState({
      ...this.state,
      addField: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.addField}
          onChange={this.changeHandler}
        />
        <button type="submit">add todo</button>
      </form>
    );
  }
}
