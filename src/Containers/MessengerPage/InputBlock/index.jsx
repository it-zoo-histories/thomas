import React, {Component} from 'react';

import {connect} from 'react-redux';

import './style.scss';
import * as MessageFunctions from '../../../Store/StoreParts/MessengerPage/Messages/actions'
import * as InputFunctions from '../../../Store/StoreParts/MessengerPage/InputBlockPart/actions'
import {bindActionCreators} from "redux";

class InputBlock extends Component {
    handleSubmitted(event) {
        event.preventDefault();
        this.props.messageActions.createMessage({
            userId: 1,
            text: this.props.inputStore.new_message,
        });
        console.log("Submitted")
    }

    handleChange(event) {
        let value = event.target.value;
        this.props.inputActions.changeCurrentMessage(value)
    }

    render = () => {
        return (
            <form className="inputblock_container" onSubmit={this.handleSubmitted.bind(this)}>
                <input type="text" className="inputField" name="input" onChange={this.handleChange.bind(this)}/>
                <input type="submit" className="sendButton" src="./send.png" width="45px" height="45px"/>
            </form>
        )
    }
}

function mapStore(state) {
    return {
        inputStore: state.IPI_inputMessageState
    }
}

function mapDispatches(dispatch) {
    return {
        messageActions: bindActionCreators(MessageFunctions, dispatch),
        inputActions: bindActionCreators(InputFunctions, dispatch)
    }
}

export default connect(mapStore, mapDispatches)(InputBlock)