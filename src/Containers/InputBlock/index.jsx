import React, {Component} from 'react';

import './style.scss';

export default class InputBlock extends Component{
    render = () => {
        return (
            <form className="inputblock_container" onSubmit={(event) => {
                event.preventDefault();   
                console.log("submitted");
            }
            }>
                <input type="text" className="inputField"/>
                <input type="submit" className="sendButton" src="./send.png" width="45px" height="45px"/>
            </form>
        )
    }
}