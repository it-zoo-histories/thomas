import React, {Component} from 'react';

import {connect} from 'react-redux';
import Logotype from '../../../Components/Logotype';

import './style.scss';

class TopBar extends Component {
    render = () => {
        return (
            <div className="topbar_container">
                <div className="logotype">
                    <Logotype/>
                </div>
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

export default connect(mapStore, mapDispatches)(TopBar)