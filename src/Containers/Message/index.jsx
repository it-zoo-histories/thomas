import React, {Component} from 'react';
import classNames from 'classnames';


import './style.scss';

export default class Message extends Component{
    render = () => {
        const {body, isBotMessage} = this.props.data;
        return(
            <div className={classNames("message_container", {"man_message": !isBotMessage})}>
                <div className="message_body">{body}</div>
            </div>
        )
    }
}