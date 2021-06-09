import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {reducer} from "./components/reducer/quoteReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {App} from './App';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);