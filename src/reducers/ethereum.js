import {
    ETHEREUM_SUCCESS, ETHEREUM_FAILURE, ETHEREUM_FETCHING
} from '../actions/user';

export default function ethereum(state = {
    isFetching: true,
    isEthereumEnabled: false,
    ethereumAddress: '',
    user3Box: null,
    user3Space: null,
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
                user3Box: action.payload.user3Box,
                user3Space: action.payload.user3Space,
                errorMessage: ''
            });
        case ETHEREUM_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isEthereumEnabled: false,
                ethereumAddress: '',
                user3Box: null,
                user3Space: null,
                errorMessage: action.payload
            });
        default:
            return state;
    }
}