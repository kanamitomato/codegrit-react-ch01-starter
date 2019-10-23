import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppTwo from './AppTwo';
import AppWithProps from './AppWithProps';
import * as serviceWorker from './serviceWorker';

const elements = (
    <div>
        <App/><AppWithProps/>
        <AppTwo/>
    </div>
)

ReactDOM.render(
    elements,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
