import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
