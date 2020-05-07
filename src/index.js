import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// add bulma css
import  'bulma'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
