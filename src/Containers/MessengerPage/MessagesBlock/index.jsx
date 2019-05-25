import React, {Component} from 'react';

import {connect} from 'react-redux';

import './style.scss';
import Message from '../Message';
import * as MessagesFunctions from '../../../Store/StoreParts/MessengerPage/Messages/actions'
import {bindActionCreators} from "redux";

class MessagesBlock extends Component {
    componentDidMount() {
        this.props.messageActions.getMessages("1", 0, 100)
    }

    render = () => {
        const {messages} = this.props.messageStore;
        return (
            <div className="messages_container">
                {messages.map((message, index) => {
                    return (
                        <Message text={message.text} isBotMessage={true} key={message.Key}/>
                    )
                })}
            </div>
        )
    }
}

function mapStore(store) {
    return {
        messageStore: store.MI_messagesPartState,
    }
}

function mapDispatches(dispatch) {
    return {
        messageActions: bindActionCreators(MessagesFunctions, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(MessagesBlock)