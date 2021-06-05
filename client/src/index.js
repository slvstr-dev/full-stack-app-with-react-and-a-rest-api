import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "./context";
import { App } from "./container/App";

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
