import React, {Component} from 'react';

import {connect} from 'react-redux';
import BurgerButton from '../../../Components/BurgerButton';
import Logotype from '../../../Components/Logotype';
import SettingButton from '../../../Components/SettingButton';

import './style.scss';

class TopBar extends Component{
    render = () => {
        return(
            <div className="topbar_container">
                <div className="left_menu_button">
                    <BurgerButton />
                </div>
                <div className="logotype">
                    <Logotype />
                </div>
                <div className="setting_button">
                    <SettingButton />  
                </div>
            </div>
        )
    }
}

function mapStore(state){
    return{

    }
}

function mapDispatches(dispatch){
    return{

    }
}

export default connect(mapStore, mapDispatches)(TopBar)