import { EthereumActionType, EthereumAction } from '../actions/user';
import { State, defaultState } from '../model/State';

export default function ethereum(state : State = defaultState, action : EthereumAction) : State {
    switch (action.type) {
        case EthereumActionType.Fetching:
            return {
                ...state,
                isFetching: true
            };
        case EthereumActionType.Success:
            return {
                ...state,
                isFetching: false,
                isEthereumEnabled: true,
                ethereumAddress: action.payload.ethereumAddress,
                userBox: action.payload.userBox,
                userSpace: action.payload.userSpace,
                userSpaceName: action.payload.userSpaceName,
            };
        case EthereumActionType.Failure:
            return {
                ...state,
                isFetching: false,
                isEthereumEnabled: false,
                ethereumAddress: '',
                userBox: null,
                userSpace: null,
                userSpaceName: '',
                errorMessage: action.payload
            };
        default:
            return state;
    }
}
