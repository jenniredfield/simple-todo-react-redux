const initialState = {
  todos: [
    { task: "Hire Jen", done: false },
    { task: "Dance", done: false },
    { task: "Listen to Queen", done: false },
    { task: "Drink coffee", done: false }
  ],
  filter: "all"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case "TOGGLE_TODO":
      const stateCopy = [...state.todos];
      const todoCopy = stateCopy[action.index];
      todoCopy.done = !todoCopy.done;
      stateCopy.splice(action.index, 1, todoCopy);
      return {
        ...state,
        todos: [...stateCopy]
      };
    case "REMOVE_TODO":
      const newStateCopy = [...state.todos];
      newStateCopy.splice(action.index, 1);
      return {
        ...state,
        todos: [...newStateCopy]
      };
    case "CHANGE_FILTER": {
      return {
        ...state,
        filter: action.filter
      };
    }
    default:
      return state;
  }
};

export default reducer;
