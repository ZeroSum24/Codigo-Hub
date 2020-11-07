import { RegisterAction } from '../actions/register';
import { State, defaultState } from '../model/State';

export default function register(state : State = defaultState, action : any) : State {
    switch (action.type) {
        case RegisterAction.Request:
            return Object.assign({}, state, {
                isFetching: true,
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: state.linkingDeveloperAccount,
                registerPending: false
            });
        case RegisterAction.Success:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: '',
                networkAddress: state.networkAddress,
                linkingDeveloperAccount: false,
                registerPending: false
            });
        case RegisterAction.FirmwareSuccess:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: '',
                networkAddress: action.payload,
                linkingDeveloperAccount: false,
                registerPending: false
            });
        case RegisterAction.PendingFirmware:
            return Object.assign({}, state, {
                isFetching: state.isFetching,
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: true,
                registerPending: false
            });
        case RegisterAction.Failure:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.payload,
                networkAddress: '',
                linkingDeveloperAccount: false,
                registerPending: false
            });
        case RegisterAction.Pending:
            return Object.assign({}, state, {
                registerPending: true
            });
        default:
            return state; 
    }
}
