import * as action from './action_type'

export function accessOn(userData) {
    return {
        type: action.ACCESSON,
        payload: userData,
    };
}

export function accessOff() {
    return {
        type: action.ACCESSOFF,
    };
}

export function setCards(cardsData) {
    return {
        type: action.SETCARDS,
        payload: cardsData,
    }
}

export function setFavs(cardsData) {
    return {
        type: action.ADDFAV,
        payload: cardsData,
    }
}


