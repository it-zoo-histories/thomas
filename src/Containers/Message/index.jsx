import React, {Component} from 'react';
import classNames from 'classnames';

import {connect} from 'react-redux';

import './style.scss';

class Message extends Component{
    render = () => {
        const {body, isBotMessage} = this.props.data;
        return(
            <div className={classNames("message_container", {"man_message": !isBotMessage})}>
                <div className="message_body">{body}</div>
            </div>
        )
    }
}


function mapStore(state){
    return{}
}

function mapDispatches(dispatch){
    return{}
}

export default connect(mapStore, mapDispatches)(Message)