import React, {Component} from 'react';

import {connect} from 'react-redux';

import MessagesBlock from './MessagesBlock';
import InputBlock from './InputBlock';

import './style.scss';
import TopBar from './TopBar';

class MessengerPage extends Component{
    render = () => {
        return(
            <div className="messenger_container">
                <TopBar />
                <MessagesBlock />
                <InputBlock />
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

export default connect(mapStore, mapDispatches)(MessengerPage)