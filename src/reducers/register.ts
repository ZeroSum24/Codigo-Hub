import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FIRMWARE_SUCCESS, REGISTER_PENDING_FIRMWARE, REGISTER_PENDING } from '../actions/register';
import { State, defaultState } from '../model/State';

export default function register(state : State = defaultState, action : any) : State {
    switch (action.type) {
        case REGISTER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: state.linkingDeveloperAccount,
                registerPending: false
            });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: '',
                networkAddress: state.networkAddress,
                linkingDeveloperAccount: false,
                registerPending: false
            });
        case REGISTER_FIRMWARE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: '',
                networkAddress: action.payload,
                linkingDeveloperAccount: false,
                registerPending: false
            });
        case REGISTER_PENDING_FIRMWARE:
            return Object.assign({}, state, {
                isFetching: state.isFetching,
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: true,
                registerPending: false
            });
        case REGISTER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.payload,
                networkAddress: '',
                linkingDeveloperAccount: false,
                registerPending: false
            });
        case REGISTER_PENDING:
            return Object.assign({}, state, {
                registerPending: true
            });
        default:
            return state; 
    }
}
