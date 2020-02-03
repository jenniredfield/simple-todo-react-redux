import React, { Component } from "react";

class Todo extends Component {
  onChangeHandler = () => {
    this.props.toggleChecked(this.props.index);
  };

  onDeleteHandler = () => {
    this.props.removeTodo(this.props.index);
  };

  render() {
    const { task, done } = this.props;

    const todoClassNames = done ? "Todo__item Todo__item--done" : "Todo__item";

    return (
      <div className="Todo__container">
        <label className="checkbox__label">
          <input
            type="checkbox"
            className="checkbox"
            checked={done}
            onChange={this.onChangeHandler}
          />
          <span className="checkmark" />
        </label>
        <li className={todoClassNames}>{task}</li>
        <button onClick={this.onDeleteHandler} className="Todo__delete-button">
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;
