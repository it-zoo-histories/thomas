import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from '../../Containers/MainPage';
import AuthPage from '../../Containers/AuthPage';
import NotFoundPage from '../../Containers/NotFoundPage';
import PrivateRoute from './private_route';
import RegisterPage from '../../Containers/RegisterPage';
import SettingPage from '../../Containers/SettingPage';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={MainPage}/>
                <PrivateRoute exact path="/settings" component={SettingPage}/>

                <Route path="/local/registration" component={RegisterPage}/>
                <Route path="/local/login" component={AuthPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    )
}