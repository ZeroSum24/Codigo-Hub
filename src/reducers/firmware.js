import {FIRMWARE_SUCCESS, FIRMWARE_FAILURE, FIRMWARE_PENDING} from '../actions/user';

export default function firmware(state = {
    networkAddress: '',
    errorMessage: '',
    firmwareLoading: false
}, action) {
    switch (action.type) {
        case FIRMWARE_SUCCESS:
            return Object.assign({}, state, {
                networkAddress: action.payload,
                errorMessage: '',
                firmwareLoading: false
            });
        case FIRMWARE_PENDING:
            return Object.assign({}, state, {
                networkAddress: state.networkAddress,
                errorMessage: '',
                firmwareLoading: true
            });
        case FIRMWARE_FAILURE:
            return Object.assign({}, state, {
                networkAddress: '',
                errorMessage: action.payload,
                firmwareLoading: false
            });
        default:
            return state;
    }
}
