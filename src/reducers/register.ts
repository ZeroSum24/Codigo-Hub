import { RegisterActionType, RegisterAction } from '../actions/register';
import { RegisterState, defaultState } from '../model/State';

export default function register(state : RegisterState = defaultState.register, action : RegisterAction) : RegisterState {
    switch (action.type) {
        case RegisterActionType.Request:
            return {
                ...state,
                isFetching: true,
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: state.linkingDeveloperAccount,
                registerPending: false
            };
        case RegisterActionType.Success:
            return {
                ...state,
                isFetching: false,
                errorMessage: '',
                networkAddress: state.networkAddress,
                linkingDeveloperAccount: false,
                registerPending: false
            };
        case RegisterActionType.FirmwareSuccess:
            return {
                ...state,
                isFetching: false,
                errorMessage: '',
                networkAddress: action.payload,
                linkingDeveloperAccount: false,
                registerPending: false
            };
        case RegisterActionType.PendingFirmware:
            return {
                ...state,
                isFetching: state.isFetching,
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: true,
                registerPending: false
            };
        case RegisterActionType.Failure:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
                networkAddress: '',
                linkingDeveloperAccount: false,
                registerPending: false
            };
        case RegisterActionType.Pending:
            return {
                ...state,
                registerPending: true
            };
        default:
            return state; 
    }
}
