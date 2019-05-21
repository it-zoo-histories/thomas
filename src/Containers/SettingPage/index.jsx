import React, {Component} from 'react';

import {connect} from 'react-redux';

class SettingPage extends Component{
    render = () => {
        return (
            <div className="settings_container">
                Здесь настройки
                Пользователь может изменить свои данные
                пользователь может просмотреть статистику по отправляемым сообщениям
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

export default connect(mapStore, mapDispatches)(SettingPage)