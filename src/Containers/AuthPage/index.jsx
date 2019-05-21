import React, {Component} from 'react';

import {connect} from 'react-redux';

import './style.scss';

class AuthPage extends Component{
    render = () => {
        return(
            <div className="exit">Заглушка</div>
        )
    }
}

function mapStore(state){
    return{}
}

function mapDispaches(dispatch){
    return{}
}

export default connect(mapStore, mapDispaches)(AuthPage)