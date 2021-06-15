import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import storeReducer from "./reducers";
import timing from "./data/source";

import App from "./App";

const store = createStore(storeReducer, { timing });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
