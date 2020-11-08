import { EthereumAction, EthereumData } from '../actions/user';
import { State, defaultState } from '../model/State';
import { Action } from '../model/Action';

export default function ethereum(state : State = defaultState, action : Action<EthereumAction, EthereumData | string>) : State {
    switch (action.type) {
        case EthereumAction.Fetching:
            return Object.assign({}, state, {
                isFetching: true
            });
        case EthereumAction.Success:
            const ethereumData = action.payload as EthereumData;
            return Object.assign({}, state, {
                isFetching: false,
                isEthereumEnabled: true,
                ethereumAddress: ethereumData.ethereumAddress,
                userBox: ethereumData.userBox,
                userSpace: ethereumData.userSpace,
                userSpaceName: ethereumData.userSpaceName,
            });
        case EthereumAction.Failure:
            return {
                ...state,
                isFetching: false,
                isEthereumEnabled: false,
                ethereumAddress: '',
                userBox: null,
                userSpace: null,
                userSpaceName: '',
                errorMessage: action.payload as string
            }
        default:
            return state;
    }
}
