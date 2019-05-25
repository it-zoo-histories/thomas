import * as types from './constants'

const startState = {
    "new_message": "",
};


export default function MSI_inputBlockState(state = startState, action) {
    const {type, payload} = action;

    switch (type) {
        case types.CHANGE_CURRENT_MESSAGE:
            return {...state, new_message: payload};
        default:
            return state
    }
}