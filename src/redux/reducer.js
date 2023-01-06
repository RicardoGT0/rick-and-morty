import * as action from "./action_type";

const initialState = {
    username: '',
    password: '',
    access: false,
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case action.ACCESSON:
            return {
                ...state,
                access: true,
                username: payload.userName,
                password: payload.passWord,
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
