import React, {Component} from 'react';

import {connect} from 'react-redux';

class NotFoundPage extends Component{
    render = () => {
        return(
            <div className="notfound_container">
                ООПС, ничего не найдено!
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

export default connect(mapStore, mapDispatches)(NotFoundPage)