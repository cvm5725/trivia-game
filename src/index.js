import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import App from "./App";
import configureStore from "./store/configureStore";

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>
    ,document.querySelector('#root')
);