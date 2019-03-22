import React, {Component} from 'react';

import './style.scss';

export default class AuthPage extends Component{
    render = () => {
        return(
            <div className="authpage_container">
                <div className="auth_block">
                    <div className="header">Войти</div>
                    <div className="form_auth">
                        <form>
                            <label for="name">Имя</label>
                            <input type="text" name="username"/>
                            <label for="password">Пароль</label>
                            <input type="password" name="password"/>
                            <button type="submit">Вход</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}