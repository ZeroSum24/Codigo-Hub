import { FIRMWARE_SUCCESS, FIRMWARE_FAILURE, FIRMWARE_PENDING } from '../actions/firmwareLink';

export default function firmware(state = {
    networkAddress: '',
    errorMessage: '',
    linkingDeveloperAccount: false
}, action) {
    console.log("reducer triggered");
    switch (action.type) {
        case FIRMWARE_SUCCESS:
            return Object.assign({}, state, {
                networkAddress: action.payload,
                errorMessage: '',
                linkingDeveloperAccount: false
            });
        case FIRMWARE_PENDING:
            console.log("firmwareLinkPending");
            return Object.assign({}, state, {
                networkAddress: state.networkAddress,
                errorMessage: '',
                linkingDeveloperAccount: true
            });
        case FIRMWARE_FAILURE:
            return Object.assign({}, state, {
                networkAddress: '',
                errorMessage: action.payload,
                linkingDeveloperAccount: false
            });
        default:
            return state;
    }
}
