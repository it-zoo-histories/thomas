const initState = {
    "currentUser": null,
    "isAuthenticated": false,
    "accessToken": null
}

export default function UPI_userPartState(state = initState, action){
    const {type, payload} = action;

    switch(type){
        default:
            return state;
    }
}