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
            "name": "email",
            "previewName": "Email",
            "actor": "email_input"
        },
        {
            "id": 3,
            "name": "password",
            "previewName": "Пароль",
            "actor": "password_input"
        }
    ],
    "buttonName": "Регистрация"
}

export default function RPI_registrationPageState(state = initState, action){
    const {type, payload} = action;
    switch(type){
        default:
            return state;
    }
}