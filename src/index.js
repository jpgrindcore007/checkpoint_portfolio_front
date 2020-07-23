import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById("root")
);
