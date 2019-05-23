import { CHANGE_CURRENT_MESSAGE } from "./constants";

export function ChangeCurrentMessage(newMessage){
    return{
        type: CHANGE_CURRENT_MESSAGE,
        "payload": newMessage
    }
}

export function SendingDataToBackend(){
    return dispatch => {
        let request = null // generate request from request builder
        dispatch({
            
        })
    }
}