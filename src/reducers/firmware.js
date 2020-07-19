import {FIRMWARE_SUCCESS, FIRMWARE_FAILURE} from '../actions/user';

export default function firmware(state = {
    networkAddress: '',
    errorMessage: ''
}, action) {
    switch (action.type) {
        case FIRMWARE_SUCCESS:
            return Object.assign({}, state, {
                networkAddress: action.payload,
                errorMessage: ''
            });
        case FIRMWARE_FAILURE:
            return Object.assign({}, state, {
                networkAddress: '',
                errorMessage: action.payload
            });
        default:
            return state;
    }
}
