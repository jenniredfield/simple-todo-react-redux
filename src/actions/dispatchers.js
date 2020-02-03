export const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch({
        type: "ADD_TODO",
        todo: todo
      });
    },
    toggleChecked: index => {
      dispatch({
        type: "TOGGLE_TODO",
        index: index
      });
    },
    removeTodo: index => {
      dispatch({
        type: "REMOVE_TODO",
        index: index
      });
    },
    changeFilter: value => {
      dispatch({
        type: "CHANGE_FILTER",
        filter: value
      });
    }
  };
};
