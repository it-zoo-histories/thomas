import { combineReducers } from "redux";

import API_authPageState from '../AuthPage/reducer';
import MI_messagesPartState from '../Messages/reducer';
import IPI_inputMessageState from '../InputBlockPart/reducer';
import UPI_userPartState from '../UserPart/reducer';

export default combineReducers({
    API_authPageState,
    MI_messagesPartState,
    IPI_inputMessageState,
    UPI_userPartState
})