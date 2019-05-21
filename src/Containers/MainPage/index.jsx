import React, {Component} from 'react';

import {connect} from 'react-redux';

import MessagesBlock from '../MessagesBlock';
import InputBlock from '../InputBlock';

import './style.scss';

class MainPage extends Component{
    render = () => {
        return(
            <div className="mainpage_container">
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

export default connect(mapStore, mapDispatches)(MainPage)