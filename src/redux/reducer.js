import * as action from "./action_type";

const initialState = {
    username: 'ejemplo@gmail.com',
    password: '1Password',
    access: false,
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case action.ACCESSON:
            return {
                ...state,
                access: true
            }
        case action.ACCESSOFF:
            return {
                ...state,
                access: false,
                username: '',
                password: ''
            }
        default:
            return state;
    }
}
