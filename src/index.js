import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import MainPage from './Containers/MainPage';

import './mainStyles.scss';
import Router from './router';

ReactDOM.render(
<BrowserRouter>
    <Router />
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
