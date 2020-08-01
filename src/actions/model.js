import {retrieveAllAvailableFirmware, retrieveAllBounties} from "../blockchain/contracts";

export const MODEL_SET_BOUNTIES = "MODEL_SET_BOUNTIES";
export const MODEL_SET_FIRMWARE = "MODEL_SET_FIRMWARE";


function setBounty(payload) {
  return {
    type: MODEL_SET_BOUNTIES,
    payload
  }
}

export function setBounties() {
  return async (dispatch) => {

    const bounties = await retrieveAllBounties();
    dispatch(setBounty(bounties));
  }
}

function setFw(payload) {
  return {
    type: MODEL_SET_FIRMWARE,
    payload
  };
}

/**
 * Sets the users devices without preforming any operation on it. Called at login once retrieving
 * the users profile details.
 * //TODO implement retrieval of data at login
 * @returns {function(...[*]=)}
 */
export function setFirmware() {
  return async (dispatch) => {
    const fw = await retrieveAllAvailableFirmware();
    dispatch(setFw(fw));
  }
}
