import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
  render() {
    const { todos, toggleChecked, removeTodo } = this.props;
    if (!todos) return null;

    return (
      <ul className="Todo-list__container">
        {todos.map((t, i) => (
          <Todo
            task={t.task}
            done={t.done}
            index={i}
            key={`todo${i}`}
            toggleChecked={toggleChecked}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    );
  }
}

export default Todos;
