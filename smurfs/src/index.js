import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { smurfListReducer } from "./reducers";
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom';


import "./index.css";
import App from "./components/App";


const store = createStore(smurfListReducer, applyMiddleware(thunk));


const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    rootElement
);