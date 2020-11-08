// Login Management
import Box from "3box";

import {setProfilePassword, setUserProfile, ProfileActionType} from "./profile";
import { setBounties, setFirmware, ModelActionType } from './model';
import { getPG } from '../filecoin/client';
import { Action, DispatchedAction } from "../model/Action";
import { Space } from "../types/3box-aux";

export const enum LoginActionType {
    Success = 'LOGIN_SUCCESS',
    Failure = 'LOGIN_FAILURE'
}

interface LoginSuccess extends Action<LoginActionType.Success> {};
interface LoginFailure extends Action<LoginActionType.Failure> {
    readonly payload : string
};
export type LoginAction = LoginSuccess | LoginFailure;

export const enum LogoutActionType {
    Request = 'LOGOUT_REQUEST',
    Success = 'LOGOUT_SUCCESS'
}

interface LogoutRequest extends Action<LogoutActionType.Request> {};
interface LogoutSuccess extends Action<LogoutActionType.Success> {};
export type LogoutAction = LogoutRequest | LogoutSuccess;

export function receiveLogin() : LoginSuccess {
    return {
        type: LoginActionType.Success
    };
}

function loginError(payload : string) : LoginFailure {
    return {
        type: LoginActionType.Failure,
        payload,
    };
}

function requestLogout() : LogoutRequest {
    return {
        type: LogoutActionType.Request,
    };
}

export function receiveLogout() : LogoutSuccess {
    return {
        type: LogoutActionType.Success,
    };
}

// Logs the user out
export function logoutUser() : DispatchedAction<LogoutActionType> {
    return (dispatch) => {
        dispatch(requestLogout());
        localStorage.removeItem('authenticated');
        dispatch(receiveLogout());
    };
}

export function loginUser(creds : { password : string }, knownPassword : string) : DispatchedAction<LoginActionType> {
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

export const enum EthereumActionType {
    Fetching = 'ETHEREUM_FETCHING',
    Success = 'ETHEREUM_SUCCESS',
    Failure = 'ETHEREUM_FAILURE'
};

interface EthereumFetching extends Action<EthereumActionType.Fetching> {};
interface EthereumSuccess extends Action<EthereumActionType.Success> {
    readonly payload : EthereumData
};
interface EthereumFailure extends Action<EthereumActionType.Failure> {
    readonly payload : string
};
export type EthereumAction = EthereumFetching | EthereumSuccess | EthereumFailure;

export interface EthereumData {
    readonly ethereumAddress : string,
    readonly userBox : Box,
    readonly userSpace : Space,
    readonly userSpaceName : string
}

function fetchEthereumAuth() : EthereumFetching {
    // console.log('fetching ethereum auth');
    return {
        type: EthereumActionType.Fetching
    };
}

function ethereumAuthSuccess(payload : EthereumData) : EthereumSuccess {
    return {
        type: EthereumActionType.Success,
        payload
    };
}

function ethereumAuthError(payload : string) : EthereumFailure {
    return {
        type: EthereumActionType.Failure,
        payload,
    };
}

/**
 * Tries to enable the users Ethereum Account and returns the address if successful. The enabled status of ethereum
 * is false by default to allow for setting by external provider.
 * @returns {function(...[*]=)}
 */
export function enableUserEthereum() : DispatchedAction<EthereumActionType | ModelActionType.SetFirmware | ModelActionType.SetBounties | ProfileActionType.UserPasswordSet | ProfileActionType.UserProfileSet> {

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
