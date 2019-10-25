import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment-timezone';
import './index.css';
import App from './App';
import AppTwo from './AppTwo';
import * as serviceWorker from './serviceWorker';

const currentTime = moment.tz(moment(), 'Asia/Tokyo').format('YYYY年MM月DD日');

// App.jsの受け渡し
const firstH1 = React.createElement(App, { currentTime }, null);
ReactDOM.render(firstH1, document.getElementById('root'));

//AppTwo.jsの受け渡し
const secondH1 = React.createElement(AppTwo, null, null);
ReactDOM.render(secondH1, document.getElementById('second-root'));

// const elements = (
//     <div>
//         <App/><AppWithProps/>
//         <AppTwo/>
//     </div>
// )

// ReactDOM.render(
//     elements,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
