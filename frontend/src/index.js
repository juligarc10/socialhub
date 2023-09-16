import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { App } from "./modules/app";
import { Provider } from "react-redux";
import { store } from "./modules/app/store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
