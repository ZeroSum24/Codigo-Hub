// Firmware Management

import { web3 } from '../blockchain/client';
import { getChallenge, sendResponse } from '../blockchain/contracts';

export const FIRMWARE_SUCCESS = 'FIRMWARE_SUCCESS';
export const FIRMWARE_FAILURE = 'FIRMWARE_FAILURE';
export const FIRMWARE_PENDING = 'FIRMWARE_PENDING';

function firmwareLinkSuccess(payload) {
  return {
    type: FIRMWARE_SUCCESS,
    payload
  };
}

function firmwareLinkPending() {
  console.log("function call - firmware link pending");
  return {
    type: FIRMWARE_PENDING
  };
}

function firmwareLinkFailure(payload) {
  return {
    type: FIRMWARE_FAILURE,
    payload,
  };
}

export function startFirmwareLink() {
  console.log("start firmware link");
  return (dispatch) => {
    dispatch(firmwareLinkPending);
  }
}

/**
 * Tries to enable the users Ethereum Account and returns the address if successful. The enabled status of ethereum
 * is false by default to allow for setting by external provider.
 * @returns {function(...[*]=)}
 */
export function linkUserToFirmware(devAddress, privateKey) {

  return async (dispatch) => {

    try {

      const challenge = await getChallenge(devAddress);
      const response = await web3.eth.accounts.sign(challenge, privateKey);
      await sendResponse(response);

      dispatch(firmwareLinkSuccess(devAddress));

    } catch (error) {
      // User denied account access...
      console.log('firmware link error caught', error);
      dispatch(firmwareLinkFailure(error));
    }
  }
}
