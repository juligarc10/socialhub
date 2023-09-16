import React from "react";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createRoot } from "react-dom/client";
import { App } from "./modules/app";
import { Provider } from "react-redux";
import { store } from "./modules/app/store/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
registerServiceWorker();
