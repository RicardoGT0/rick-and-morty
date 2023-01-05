import * as action from './action_type'

export function accessOn() {
    return {
        type: action.ACCESSON,
    };
}

export function accessOff() {
    return {
        type: action.ACCESSOFF,
    };
}