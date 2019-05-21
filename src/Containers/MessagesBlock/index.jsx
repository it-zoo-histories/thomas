import React, {Component} from 'react';

import {connect} from 'react-redux';

import './style.scss';
import Message from '../Message';

class MessagesBlock extends Component{
    render = () => {
        return(
            <div className="messages_container">
                {
                    [{
                        id: 1, body: "test", isBotMessage: true,
                    },
                    {
                        id: 2, body: "/test", isBotMessage: false,
                    }
                ].map((message, index) => {
                    return(
                        <Message data={message} key={index + message.id}/>
                    )
                })
                }
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

export default connect(mapStore, mapDispatches)(MessagesBlock)