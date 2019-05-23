import React, {Component} from 'react';

import {connect} from 'react-redux';

class BurgerButton extends Component{
    render = () => {
        return (
            <div className="burgerbutton_component">
                Бургер
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

export default connect(mapStore, mapDispatches)(BurgerButton)