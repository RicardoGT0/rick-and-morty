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
        case action.SETFAVORITE:
            const temp= []
            state.cards.forEach(element => {
                const e={...element}
                temp.push(e)
            });
            const personaje = temp.find((p) => p.id === payload) //payload==id
            if (personaje.favorite) {
                personaje.favorite = false
            } else {
                personaje.favorite = true
            }
            const newCards = temp.filter((p) => p.id !== payload)
            newCards.push(personaje)
            return {
                ...state,
                cards: newCards,
            }
        default:
            return state;
    }
}
