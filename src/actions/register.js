import {toast} from 'react-toastify';
import { web3 } from '../blockchain/client';
import { getChallenge, sendResponse, registerCurrentUser } from '../blockchain/contracts';
import {setProfilePassword} from "./profile";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_FIRMWARE_SUCCESS = 'REGISTER_FIRMWARE_SUCCESS';
export const REGISTER_PENDING_FIRMWARE = 'REGISTER_PENDING_FIRMWARE';
export const REGISTER_PENDING = 'REGISTER_PENDING';


export function receiveRegister() {
    return {
        type: REGISTER_SUCCESS
    };
}


export function registerError(payload) {
    return {
        type: REGISTER_FAILURE,
        payload,
    };
}

function firmareLinkSuccess(payload) {
    return {
        type: REGISTER_FIRMWARE_SUCCESS,
        payload
    };
}

function firmwareLinkPending() {
    return {
        type: REGISTER_PENDING_FIRMWARE
    };
}

export function registerPending() {
  return {
    type: REGISTER_PENDING
  };
}

export function registerUser(payload, userSpace) {
    return async (dispatch) => {

      try {

        if (payload.creds.password.length >= 8) {
          await registerCurrentUser();
          toast.success("You've been registered successfully");
          dispatch(setPassword(userSpace, payload.creds.password));
          payload.history.push('/login');
        } else {
          dispatch(registerError('Password must contain 8 characters. Try again'));
        }
      } catch (error) {
        dispatch(registerError(error));
      }
    }
}

function setPassword(userSpace, password) {
  return async (dispatch) => {
    await userSpace.private.set('password', password);
    dispatch(setProfilePassword({userPassword: password}));
  }
}

/**
 * Tries to enable the users Ethereum Account and returns the address if successful. The enabled status of ethereum
 * is false by default to allow for setting by external provider.
 * @returns {function(...[*]=)}
 */
export function linkUserToFirmware(devAddress, privateKey, creds, userSpace) {

    return async (dispatch) => {

        try {

            dispatch(firmwareLinkPending());

            const challenge = await getChallenge(devAddress);
            const response = await web3.eth.accounts.sign(challenge, privateKey);
            await sendResponse(response);

            dispatch(firmareLinkSuccess(devAddress));
            dispatch(registerUser(creds, userSpace));

        } catch (error) {
            // User denied account access...
            console.log('firmware link error caught', error);
            dispatch(registerError(error));
        }
    }
}
