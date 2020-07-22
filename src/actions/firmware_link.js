// Firmware Management

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

/**
 * Tries to enable the users Ethereum Account and returns the address if successful. The enabled status of ethereum
 * is false by default to allow for setting by external provider.
 * @returns {function(...[*]=)}
 */
export function linkUserToFirmware(networkAddress) {

  return async (dispatch) => {

    try {

      dispatch(firmwareLinkPending());
      // Call contract.challenge(address_to_claim) generates a random challenge, stores it in the smart contract and returns it

      // Sign the challenge with web3.eth.sign(challenge, address_to_claim) to produce the response, as far as I understand it goes to the attached wallet to look up the associated private key
      // Call contract.response(response) to return the response, the smart contract checks the signature and if correct stores a mapping sender_address -> claimed_address
      // Any client can call contract.get_paired_address(address) to see if there is an associated address
      const networkAddress = '';


      // Accounts now exposed
      dispatch(firmwareLinkSuccess(networkAddress));

    } catch (error) {
      // User denied account access...
      console.log('firmware link error caught', error);
      dispatch(firmwareLinkFailure(error));
    }
  }
}
