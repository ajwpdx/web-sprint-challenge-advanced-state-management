import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reducer} from './utils/reducer'

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store = {store}>
        <App />    
    </Provider>,
     document.getElementById("root"));
