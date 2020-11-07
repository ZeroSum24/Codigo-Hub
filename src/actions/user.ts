// Login Management
import Box from "3box";

import {setProfilePassword, setUserProfile, ProfileAction} from "./profile";
import { setBounties, setFirmware, ModelAction } from './model';
import { getPG } from '../filecoin/client';
import { EmptyAction, Action, DispatchedAction } from "../model/Action";
import { Space } from "../types/3box-aux";

export const enum LoginAction {
    Success = 'LOGIN_SUCCESS',
    Failure = 'LOGIN_FAILURE'
}

export const enum LogoutAction {
    Request = 'LOGOUT_REQUEST',
    Success = 'LOGOUT_SUCCESS'
}

export function receiveLogin() : EmptyAction<LoginAction.Success> {
    return {
        type: LoginAction.Success
    };
}

function loginError(payload : string) : Action<LoginAction.Failure, string> {
    return {
        type: LoginAction.Failure,
        payload,
    };
}

function requestLogout() : EmptyAction<LogoutAction.Request> {
    return {
        type: LogoutAction.Request,
    };
}

export function receiveLogout() : EmptyAction<LogoutAction.Success> {
    return {
        type: LogoutAction.Success,
    };
}

// Logs the user out
export function logoutUser() : DispatchedAction<LogoutAction> {
    return (dispatch) => {
        dispatch(requestLogout());
        localStorage.removeItem('authenticated');
        dispatch(receiveLogout());
    };
}

export function loginUser(creds : { password : string }, knownPassword : string) : DispatchedAction<LoginAction> {
    return async (dispatch) => {

        dispatch(receiveLogin());

        if (creds.password === knownPassword) {
            localStorage.setItem('authenticated', true.toString());
        } else {
            dispatch(loginError('Something was wrong. Try again'));
        }
    }
}

// Ethereum Management

export const enum EthereumAction {
    Fetching = 'ETHEREUM_FETCHING',
    Success = 'ETHEREUM_SUCCESS',
    Failure = 'ETHEREUM_FAILURE'
}

export interface EthereumData {
    ethereumAddress : string,
    userBox : Box,
    userSpace : Space,
    userSpaceName : string
}

function fetchEthereumAuth() : EmptyAction<EthereumAction.Fetching> {
    // console.log('fetching ethereum auth');
    return {
        type: EthereumAction.Fetching
    };
}

function ethereumAuthSuccess(payload : EthereumData) : Action<EthereumAction.Success, EthereumData> {
    return {
        type: EthereumAction.Success,
        payload
    };
}

function ethereumAuthError(payload : string) : Action<EthereumAction.Failure, string> {
    return {
        type: EthereumAction.Failure,
        payload,
    };
}

/**
 * Tries to enable the users Ethereum Account and returns the address if successful. The enabled status of ethereum
 * is false by default to allow for setting by external provider.
 * @returns {function(...[*]=)}
 */
export function enableUserEthereum() : DispatchedAction<EthereumAction | ModelAction.SetFirmware | ModelAction.SetBounties | ProfileAction.UserPasswordSet | ProfileAction.UserProfileSet> {

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
            // initialize Powergate connection
            getPG().catch(console.error);
            console.log('eth auth success', ethereumAddress, box, spaces)

        } catch (error) {
            // User denied account access...
            console.log('error caught', error);
            dispatch(ethereumAuthError(error));
        }
    }
}
