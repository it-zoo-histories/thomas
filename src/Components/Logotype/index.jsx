import React, {Component} from 'react';

import {connect} from 'react-redux';
import './styles.scss'

class Logotype extends Component {
    render = () => {
        return (
            <div className="logotype_component">
                МЯУ<span className="rightText">БОТ</span>
            </div>
        )
    }
}

function mapStore(state) {
    return {}
}

function mapDispatches(dispatch) {
    return {}
}

export default connect(mapStore, mapDispatches)(Logotype)