import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles.css";

function RootApp() {
  return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RootApp />, rootElement);
