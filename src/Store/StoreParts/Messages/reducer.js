const initState ={
    "messages": [],
    "loading": false,
    "error": false,
}

export default function MI_messagesState(state = initState, action){
    const {type, payload} = action;

    switch(type){
        default:
            return state;
    }
}