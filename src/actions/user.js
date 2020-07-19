// Login Management

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function receiveLogin() {
    return {
        type: LOGIN_SUCCESS
    };
}

function loginError(payload) {
    return {
        type: LOGIN_FAILURE,
        payload,
    };
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
    };
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
    };
}

// Logs the user out
export function logoutUser() {
    return (dispatch) => {
        dispatch(requestLogout());
        localStorage.removeItem('authenticated');
        dispatch(receiveLogout());
    };
}

export function loginUser(creds) {
    // TODO this is where we implement an actual login implementation
    return (dispatch) => {

        dispatch(receiveLogin());

        if (creds.email.length > 0 && creds.password.length > 0) {
            localStorage.setItem('authenticated', true)
        } else {
            dispatch(loginError('Something was wrong. Try again'));
        }
    }
}

// Ethereum Management

export const ETHEREUM_SUCCESS = 'ETHEREUM_SUCCESS';
export const ETHEREUM_FAILURE = 'ETHEREUM_FAILURE';


export function enableEthereum() {
    return {
        type: ETHEREUM_SUCCESS,
    };
}

function ethereumEnableError(payload) {
    return {
        type: ETHEREUM_FAILURE,
        payload,
    };
}

/**
 * Trys to enable the users Ethereum Account and returns the address if successful.
 * @returns {function(...[*]=)}
 */
export function enableUserEthereum() {

    return (dispatch) => {

        dispatch(enableEthereum());

        try {
            // Request account access if needed
            let ethereumAddress = window.ethereum.enable();
            // Accounts now exposed
            localStorage.setItem('ethereumEnabled', true);
            localStorage.setItem('ethereumAddress', ethereumAddress);
        } catch (error) {
            // User denied account access...
            dispatch(ethereumEnableError(error));
        }
    }
}
