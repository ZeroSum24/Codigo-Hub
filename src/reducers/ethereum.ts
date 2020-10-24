import {
    ETHEREUM_SUCCESS, ETHEREUM_FAILURE, ETHEREUM_FETCHING
} from '../actions/user';
import { State, defaultState } from '../model/State';

export default function ethereum(state : State = defaultState, action : any) : State {
    switch (action.type) {
        case ETHEREUM_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ETHEREUM_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isEthereumEnabled: true,
                ethereumAddress: action.payload.ethereumAddress,
                userBox: action.payload.userBox,
                userSpace: action.payload.userSpace,
                userSpaceName: action.payload.userSpaceName,
            });
        case ETHEREUM_FAILURE:
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
