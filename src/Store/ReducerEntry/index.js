import { combineReducers } from "redux";

import API_authPageState from '../StoreParts/AuthPage/reducer';
import MI_messagesPartState from '../StoreParts/Messages/reducer';
import IPI_inputMessageState from '../StoreParts/InputBlockPart/reducer';
import UPI_userPartState from '../StoreParts/UserPart/reducer';

export default combineReducers({
    API_authPageState,
    MI_messagesPartState,
    IPI_inputMessageState,
    UPI_userPartState
})