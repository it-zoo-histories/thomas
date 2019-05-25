import React, {Component} from 'react';
import classNames from 'classnames';

import {connect} from 'react-redux';

import './style.scss';

class Message extends Component{
    render = () => {
        console.log("props", this.props);
        return(
            <div className={classNames("message_container", {"man_message": !this.props.isBotMessage})}>
                <div className="message_body">{this.props.text}</div>
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