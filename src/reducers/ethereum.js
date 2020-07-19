import {
    ETHEREUM_SUCCESS, ETHEREUM_FAILURE
} from '../actions/user';

export default function ethereum(state = {
    isEthereumEnabled: false,
    ethereumAddress: '',
    errorMessage: ''
}, action) {
    switch (action.type) {
        case ETHEREUM_SUCCESS:
            return Object.assign({}, state, {
                isEthereumEnabled: true,
                ethereumAddress: localStorage.getItem('ethereumAddress'),
                errorMessage: ''
            });
        case ETHEREUM_FAILURE:
            return Object.assign({}, state, {
                isEthereumEnabled: false,
                ethereumAddress: null,
                errorMessage: action.payload
            });
        default:
            return state;
    }
}
