import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../actions/dispatchers";

import Input from "../components/Input";
import Todos from "../components/Todos";
import FilterButton from "../components/FilterButton";

const filters = [
  { value: "all", text: "All" },
  { value: "completed", text: "Completed" },
  { value: "incomplete", text: "Incomplete" }
];

class TodoContainer extends Component {
  changeSelected = e => {
    const value = e.target.value;
    this.props.changeFilter(value);
  };

  render() {
    let { todos, filter } = this.props;
    const changeSelected = this.changeSelected;

    if (filter === "completed") {
      todos = todos.filter(t => t.done);
    }

    if (filter === "incomplete") {
      todos = todos.filter(t => !t.done);
    }

    return (
      <div className="Todo-App__container">
        <h2>Simple Todo Redux</h2>
        <small>A simple To-do List that saves to Local Storage</small>
        <Input addTodo={this.props.addTodo} />
        <Todos
          todos={todos}
          toggleChecked={this.props.toggleChecked}
          removeTodo={this.props.removeTodo}
        />

        <div className="Todo-Controls__container">
          {filters.map(x => {
            return (
              <FilterButton
                text={x.text}
                value={x.value}
                filter={filter}
                changeSelected={changeSelected}
                key={x.text}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
