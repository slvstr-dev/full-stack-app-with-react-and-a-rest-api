import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "./components/Context";
import { App } from "./components/App";

import "./index.css";

/**
 * Entry point of React app
 */
ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
