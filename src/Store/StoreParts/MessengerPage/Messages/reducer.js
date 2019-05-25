import {ADD_MESSAGE, GET_MESSAGES} from "./constants";

const initState = {
    "messages": [],
    "loading": false,
    "error": false,
}

export default function MI_messagesState(state = initState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_MESSAGES:
            return {...state, messages: payload};
        case ADD_MESSAGE:
            console.log("Paylod after add", payload);
            const array = new Array();
            array.push(...state.messages);
            array.push(action.payload);

            return {...state, messages: array};
        default:
            return state;
    }
}