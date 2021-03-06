// Login Management
import Box from "3box";

import {setProfilePassword, setUserProfile} from "./profile";
import { setBounties, setFirmware } from './model';

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

export function loginUser(creds, knownPassword) {
    return async (dispatch) => {

        dispatch(receiveLogin());

        if (creds.password === knownPassword) {
            localStorage.setItem('authenticated', true)
        } else {
            dispatch(loginError('Something was wrong. Try again'));
        }
    }
}

// Ethereum Management

export const ETHEREUM_FETCHING = 'ETHEREUM_FETCHING';
export const ETHEREUM_SUCCESS = 'ETHEREUM_SUCCESS';
export const ETHEREUM_FAILURE = 'ETHEREUM_FAILURE';


function fetchEthereumAuth() {
    // console.log('fetching ethereum auth');
    return {
        type: ETHEREUM_FETCHING
    };
}

function ethereumAuthSuccess(payload) {
    return {
        type: ETHEREUM_SUCCESS,
        payload
    };
}

function ethereumAuthError(payload) {
    return {
        type: ETHEREUM_FAILURE,
        payload,
    };
}

/**
 * Tries to enable the users Ethereum Account and returns the address if successful. The enabled status of ethereum
 * is false by default to allow for setting by external provider.
 * @returns {function(...[*]=)}
 */
export function enableUserEthereum() {

    return async (dispatch) => {

        dispatch(fetchEthereumAuth());

        try {
            // Request account access if needed
            const ethereumAddress = (await window.ethereum.request({ method: 'eth_requestAccounts' }))[0];
            console.log("ethereum address retrieved", ethereumAddress);
            // initialize blockchain data
            //init available firmware
            dispatch(setFirmware());
            //init available bounties
            dispatch(setBounties());

            // Authenticate and the users 3box and app space
            const box = await Box.create(window.ethereum);
            const spaces = ['código-user-space'];
            await box.auth(spaces, {address: ethereumAddress});
            await box.syncDone;

            // open user space
            let space = await box.openSpace(spaces[0]);
            await space.syncDone;

            // get user password from space and kick off user profile set
            let userPassword = await space.private.get('password');
            dispatch(setProfilePassword({userPassword: userPassword}));
            dispatch(setUserProfile({userAddress: ethereumAddress}));

            // Accounts now exposed
            dispatch(ethereumAuthSuccess({
                ethereumAddress: ethereumAddress,
                userBox: box,
                userSpaceName: spaces[0],
                userSpace: space
            }));
            console.log('eth auth success', ethereumAddress, box, spaces)

        } catch (error) {
            // User denied account access...
            console.log('error caught', error);
            dispatch(ethereumAuthError(error));
        }
    }
}
