import { web3 } from '../blockchain/client';
import { getChallenge, sendResponse } from '../blockchain/contracts';

// Firmware Management

export const FIRMWARE_SUCCESS = 'FIRMWARE_SUCCESS';
export const FIRMWARE_FAILURE = 'FIRMWARE_FAILURE';

function firmwareLinkSuccess(payload) {
  return {
    type: FIRMWARE_SUCCESS,
    payload
  };
}

function firmwareLinkFailure(payload) {
  return {
    type: FIRMWARE_FAILURE,
    payload,
  };
}

/**
 * Tries to enable the users Ethereum Account and returns the address if successful. The enabled status of ethereum
 * is false by default to allow for setting by external provider.
 * @returns {function(...[*]=)}
 */
export async function linkUserToFirmware(devAddress, privateKey) {

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
