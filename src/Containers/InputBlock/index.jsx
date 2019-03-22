import React, {Component} from 'react';

import './style.scss';

export default class InputBlock extends Component{
    render = () => {
        return (
            <form className="inputblock_container">
                <input type="text" className="inputField"/>
                <input type="image" className="sendButton" src="./send.png" width="45px" height="45px"/>
            </form>
        )
    }
}