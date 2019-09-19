import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

setTimeout(() => ReactDOM.render(<Root />, document.getElementById('root')), 2000); // Сделано ТОЛЬКО для возможности прогрузить шрифты и правильно высчитывать элементы в matrial-ui (точнее, 
// ширину индикатора вкладки). Это нерешённый баг в библиотеке, см https://github.com/mui-org/material-ui/issues/7187
//ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
