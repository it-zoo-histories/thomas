import React, {Component} from 'react';

import {connect} from 'react-redux';

class RegistrationPage extends Component{
    render = () => {
        return(
            <div className="registration_container">
                Регистрация
            </div>
        )
    }
}

function mapStore(state){
    return{

    }
}

function mapDispatches(dispatch){
    return{}
}


export default connect(mapStore, mapDispatches)(RegistrationPage)
