import { toast } from 'react-toastify';
import { web3 } from '../blockchain/client';
import { getChallenge, sendResponse, registerCurrentUser } from '../blockchain/contracts';
import { setProfilePassword, ProfileAction } from "./profile";
import { Action, EmptyAction, DispatchedAction } from '../model/Action';
import { Space } from '../types/3box-aux';

export const enum RegisterAction {
  Request = 'REGISTER_REQUEST',
  Success = 'REGISTER_SUCCESS',
  Failure = 'REGISTER_FAILURE',
  FirmwareSuccess = 'REGISTER_FIRMWARE_SUCCESS',
  PendingFirmware = 'REGISTER_PENDING_FIRMWARE',
  Pending = 'REGISTER_PENDING'
}

export function receiveRegister() : EmptyAction<RegisterAction.Success> {
    return {
        type: RegisterAction.Success
    };
}


export function registerError(payload : string) : Action<RegisterAction.Failure, string> {
    return {
        type: RegisterAction.Failure,
        payload
    };
}

function firmareLinkSuccess(payload : string) : Action<RegisterAction.FirmwareSuccess, string> {
    return {
        type: RegisterAction.FirmwareSuccess,
        payload
    };
}

function firmwareLinkPending() : EmptyAction<RegisterAction.PendingFirmware> {
    return {
        type: RegisterAction.PendingFirmware
    };
}

export function registerPending() : EmptyAction<RegisterAction.Pending> {
  return {
    type: RegisterAction.Pending
  };
}

export function registerUser(payload : {creds : {password: string}, history: string[]}, userSpace : Space) : DispatchedAction<RegisterAction.Failure | ProfileAction.UserPasswordSet> {
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

function setPassword(userSpace : Space, password : string) : DispatchedAction<ProfileAction.UserPasswordSet> {
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
export function linkUserToFirmware(devAddress : string, privateKey : string, creds : {creds: {password: string}, history: string[]}, userSpace : Space) : DispatchedAction<RegisterAction.PendingFirmware | RegisterAction.FirmwareSuccess | RegisterAction.Failure | ProfileAction.UserPasswordSet> {

    return async (dispatch) => {

        try {

            dispatch(firmwareLinkPending());

            const challenge = await getChallenge(devAddress);
            const response = web3.eth.accounts.sign(challenge, privateKey);
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
