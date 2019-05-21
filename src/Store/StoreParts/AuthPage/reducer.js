const initState = {
    "fields": [
        {
            "id": 1,
            "name": "username",
            "previewName": "Имя пользователя",
            "actor": "username_input"
        },
        {
            "id": 2,
            "name": "password",
            "previewName": "Пароль",
            "actor": "password_input"
        }
    ],
    "buttonName": "Войти"
}

export default function API_authPageState(state = initState, action){
    const {type, payload} = action;
    switch(type){
        default:
            return state;
    }
}