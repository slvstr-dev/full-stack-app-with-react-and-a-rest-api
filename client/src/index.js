import React from "react";
import ReactDOM from "react-dom";
import { App } from "./container/App";
import "./index.css";

/**
 * Entry point of React app
 */
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
