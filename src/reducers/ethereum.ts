import { EthereumAction } from '../actions/user';
import { State, defaultState } from '../model/State';

export default function ethereum(state : State = defaultState, action : any) : State {
    switch (action.type) {
        case EthereumAction.Fetching:
            return Object.assign({}, state, {
                isFetching: true
            });
        case EthereumAction.Success:
            return Object.assign({}, state, {
                isFetching: false,
                isEthereumEnabled: true,
                ethereumAddress: action.payload.ethereumAddress,
                userBox: action.payload.userBox,
                userSpace: action.payload.userSpace,
                userSpaceName: action.payload.userSpaceName,
            });
        case EthereumAction.Failure:
            return Object.assign({}, state, {
                isFetching: false,
                isEthereumEnabled: false,
                ethereumAddress: '',
                userBox: null,
                userSpace: null,
                userSpaceName: '',
                errorMessage: action.payload
            });
        default:
            return state;
    }
}
