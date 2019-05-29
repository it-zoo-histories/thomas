import * as types from './constants'


export function changeCurrentMessage(message) {
    return {type: types.CHANGE_CURRENT_MESSAGE, payload: message};
}

