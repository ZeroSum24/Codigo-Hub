import {
    ETHEREUM_SUCCESS, ETHEREUM_FAILURE
} from '../actions/user';

const ethereumEnabled = localStorage.getItem('ethereumEnabled');
const ethereumAddress = localStorage.getItem('ethereumAddress');
export default function ethereum(state = {
    isEthereumEnabled: ethereumEnabled,
    ethereumAddress: ethereumAddress
}, action) {
    switch (action.type) {
        case ETHEREUM_SUCCESS:
            return Object.assign({}, state, {
                isEthereumEnabled: true,
                ethereumAddress: true,
                errorMessage: '',
            });
        case ETHEREUM_FAILURE:
            return Object.assign({}, state, {
                isEthereumEnabled: false,
                ethereumAddress: null,
                errorMessage: action.payload,
            });
        default:
            return state;
    }
}
