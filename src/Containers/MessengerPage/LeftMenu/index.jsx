import React, {Component} from 'react';

import {connect} from 'react-redux';

class LeftMenu extends Component{
    render = () => {
        return (
            <div className="left_menu_container">
                Левое выдвигающееся меню
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

export default connect(mapStore, mapDispatches)(LeftMenu)
