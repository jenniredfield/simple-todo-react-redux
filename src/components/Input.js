import React, { Component } from "react";

class Input extends Component {
  state = {
    task: ""
  };

  handleChange = e => {
    const text = e.target.value;

    this.setState({
      task: text
    });
  };

  handleKeyDown = e => {
    const { addTodo } = this.props;

    if (e.key === "Enter") {
      if (!this.state.task) return;
      addTodo({ task: this.state.task, done: false });
      this.setState({
        task: ""
      });
    }
  };

  render() {
    return (
      <div>
        <input
          value={this.state.task}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder="Add a new todo..."
          className="Todo__input"
        />
      </div>
    );
  }
}

export default Input;
