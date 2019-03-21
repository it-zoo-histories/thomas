import React, {Component} from 'react';

import MessagesBlock from '../MessagesBlock';
import InputBlock from '../InputBlock';

import './style.scss';

export default class MainPage extends Component{
    render = () => {
        return(
            <div className="mainpage_container">
                <MessagesBlock />
                <InputBlock />
            </div>
        )
    }
}