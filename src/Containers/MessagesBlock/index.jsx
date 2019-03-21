import React, {Component} from 'react';

import './style.scss';
import Message from '../Message';

export default class MessagesBlock extends Component{
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