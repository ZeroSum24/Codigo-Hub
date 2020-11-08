import { toast } from 'react-toastify';
import { web3 } from '../blockchain/client';
import { getChallenge, sendResponse, registerCurrentUser } from '../blockchain/contracts';
import { setProfilePassword, ProfileActionType } from "./profile";
import { Action, DispatchedAction } from '../model/Action';
import { Space } from '../types/3box-aux';

export const enum RegisterActionType {
  Request = 'REGISTER_REQUEST',
  Success = 'REGISTER_SUCCESS',
  Failure = 'REGISTER_FAILURE',
  FirmwareSuccess = 'REGISTER_FIRMWARE_SUCCESS',
  PendingFirmware = 'REGISTER_PENDING_FIRMWARE',
  Pending = 'REGISTER_PENDING'
}

interface Request extends Action<RegisterActionType.Request> {};
interface Success extends Action<RegisterActionType.Success> {};
interface Failure extends Action<RegisterActionType.Failure> {
  readonly payload : string
};
interface FirmwareSuccess extends Action<RegisterActionType.FirmwareSuccess> {
  readonly payload : string
};
interface PendingFirmware extends Action<RegisterActionType.PendingFirmware> {};
interface Pending extends Action<RegisterActionType.Pending> {};
export type RegisterAction = Request | Success | Failure | FirmwareSuccess | PendingFirmware | Pending;

export function receiveRegister() : Success {
    return {
        type: RegisterActionType.Success
    };
}


export function registerError(payload : string) : Failure {
    return {
        type: RegisterActionType.Failure,
        payload
    };
}

function firmareLinkSuccess(payload : string) : FirmwareSuccess {
    return {
        type: RegisterActionType.FirmwareSuccess,
        payload
    };
}

function firmwareLinkPending() : PendingFirmware {
    return {
        type: RegisterActionType.PendingFirmware
    };
}

export function registerPending() : Pending {
  return {
    type: RegisterActionType.Pending
  };
}

export function registerUser(payload : {creds : {password: string}, history: string[]}, userSpace : Space) : DispatchedAction<RegisterActionType.Failure | ProfileActionType.UserPasswordSet> {
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

function setPassword(userSpace : Space, password : string) : DispatchedAction<ProfileActionType.UserPasswordSet> {
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
export function linkUserToFirmware(devAddress : string, privateKey : string, creds : {creds: {password: string}, history: string[]}, userSpace : Space) : DispatchedAction<RegisterActionType.PendingFirmware | RegisterActionType.FirmwareSuccess | RegisterActionType.Failure | ProfileActionType.UserPasswordSet> {

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
