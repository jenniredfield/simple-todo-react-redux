import React from "react";
import ReactDOM from "react-dom";

// Components
import TodoContainer from "./containers/TodoContainer";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";

// Local Storage helpers
import { loadState, saveState } from "./helpers/localStorage";

// Throttle
// Ensures saveState is not called multple times within a given time
import { throttle } from "lodash";

// Styles
import "./styles/styles2.css";

const persistedState = loadState();

const store = createStore(reducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState({ todos: store.getState().todos, filter: "all" });
  }, 1000)
);

function AppWrapper() {
  return (
    <div className="App__wrapper">
      <TodoContainer/>
    </div>
  )
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  rootElement
);
