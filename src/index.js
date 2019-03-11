import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/

// https://github.com/typicode/json-server

// https://github.com/jaredpalmer/formik

// https://www.smooth-code.com/open-source/loadable-components/docs/library-splitting/

//https://reacttraining.com/react-router/web/example/route-config

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
