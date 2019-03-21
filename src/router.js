import React from 'react';

import {Switch, Route} from 'react-router-dom';

import MainPage from './Containers/MainPage';
import AuthPage from './Containers/AuthPage';
import NotFoundPage from './Containers/NotFoundPage';

export default function Router(props){
    return (
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/auth" component={AuthPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    )
}