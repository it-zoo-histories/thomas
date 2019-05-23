import React, {Component} from 'react';

import {connect} from 'react-redux';

class Logotype extends Component{
    render = () => {
        return (
            <div className="logotype_component">
                Логотип
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

export default connect(mapStore, mapDispatches)(Logotype)