import * as action from './action_type'

export function accessOn(userData) {
    return {
        type: action.ACCESSON,
        payload:userData,
    };
}

export function accessOff() {
    return {
        type: action.ACCESSOFF,
    };
}