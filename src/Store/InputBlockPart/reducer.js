const startState = {
    "new_message": "",
}


export default function MSI_inputBlockState(state = startState, action){
    const {type, payload} = action;

    switch(type){
        default:
            return state
    }
}