import React, {Component} from 'react';

import './style.scss';

export default class InputBlock extends Component{
    render = () => {
        return (
            <div className="inputblock_container">
                <textarea className="inputField"/>
                <div className="sendButton" />
            </div>
        )
    }
}