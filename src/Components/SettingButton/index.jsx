import React, {Component} from 'react';

import {connect} from 'react-redux';

class SettingButton extends Component{
    render = () =>{
        return (
            <div className="setting_button_component">
                Кнопка настроек
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

export default connect(mapStore, mapDispatches)(SettingButton)