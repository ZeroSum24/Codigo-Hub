import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FIRMWARE_SUCCESS, REGISTER_PENDING_FIRMWARE } from '../actions/register';

export default function register(state = {
    networkAddress: '',
    isFetching: false,
    errorMessage: '',
    linkingDeveloperAccount: false
}, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: state.linkingDeveloperAccount
            });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: '',
                networkAddress: state.networkAddress,
                linkingDeveloperAccount: false
            });
        case REGISTER_FIRMWARE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: '',
                networkAddress: action.payload,
                linkingDeveloperAccount: false
            });
        case REGISTER_PENDING_FIRMWARE:
            return Object.assign({}, state, {
                isFetching: state.isFetching,
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: true
            });
        case REGISTER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.payload,
                networkAddress: '',
                linkingDeveloperAccount: false
            });
        default:
            return state; 
    }
}
