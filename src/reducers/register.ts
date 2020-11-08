import { RegisterAction } from '../actions/register';
import { State, defaultState } from '../model/State';
import { Action } from '../model/Action';

export default function register(state : State = defaultState, action : Action<RegisterAction, string>) : State {
    switch (action.type) {
        case RegisterAction.Request:
            return {
                ...state,
                isFetching: true,
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: state.linkingDeveloperAccount,
                registerPending: false
            };
        case RegisterAction.Success:
            return {
                ...state,
                isFetching: false,
                errorMessage: '',
                networkAddress: state.networkAddress,
                linkingDeveloperAccount: false,
                registerPending: false
            };
        case RegisterAction.FirmwareSuccess:
            return {
                ...state,
                isFetching: false,
                errorMessage: '',
                networkAddress: action.payload,
                linkingDeveloperAccount: false,
                registerPending: false
            };
        case RegisterAction.PendingFirmware:
            return {
                ...state,
                isFetching: state.isFetching,
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: true,
                registerPending: false
            };
        case RegisterAction.Failure:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
                networkAddress: '',
                linkingDeveloperAccount: false,
                registerPending: false
            };
        case RegisterAction.Pending:
            return {
                ...state,
                registerPending: true
            };
        default:
            return state; 
    }
}
