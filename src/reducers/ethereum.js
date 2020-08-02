import {
    ETHEREUM_SUCCESS, ETHEREUM_FAILURE, ETHEREUM_FETCHING
} from '../actions/user';

export default function ethereum(state = {
    isFetching: true,
    isEthereumEnabled: false,
    ethereumAddress: '',
    userBox: null,
    userSpace: null,
    errorMessage: ''
}, action) {
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
                errorMessage: ''
            });
        case ETHEREUM_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isEthereumEnabled: false,
                ethereumAddress: '',
                userBox: null,
                userSpace: null,
                errorMessage: action.payload
            });
        default:
            return state;
    }
}
