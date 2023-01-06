import * as action from "./action_type";

const initialState = {
    username: '',
    password: '',
    access: false,
    cards: [],
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
                password: '',
            }
        case action.SETCARDS:
            return {
                ...state,
                cards: payload,
            }
        case action.ADDFAV:
            return {
                ...state,
                cards: state.cards.map((e) => { if (e.id === payload) e.fav = true })
            }
        case action.REMOVEFAV:
            return {
                ...state,
                cards: state.cards.map((e) => { if (e.id === payload) e.fav = false })
            }
        default:
            return state;
    }
}
