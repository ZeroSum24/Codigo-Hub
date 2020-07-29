import { MODEL_SET_FIRMWARE } from './model';


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
 * @param fw
 * @returns {function(...[*]=)}
 */
export function setFirmware(fw) {
  return (dispatch) => {
    dispatch(setFw(fw));
  }
}

/**
 * Add to the device list.
 * TODO implement UI binding and functionality
 * @param firmwares the list of the users devices
 * @param fw the device to be added to the list of devices
 * @returns {function(...[*]=)}
 */
export function createFirmware(firmwares, fw) {
  return (dispatch) => {

    firmwares.push(fw);
    dispatch(setFw(firmwares));
  }
}

/**
 * Replaces an item in the device list.
 * TODO implement UI binding and functionality
 * @param fw
 * @returns {function(...[*]=)}
 */
export function updateFirmware(fw) {
  return (dispatch) => {

    // TODO update orbit DB datastore

    // need to check the device is unique based on naming convention first

    dispatch(setFw(fw));
  }
}

/**
 * Remove a firmware from the list based on index.
 * TODO implement UI binding and functionality
 * @param fw
 * @returns {function(...[*]=)}
 */
export function deleteFirmware(fw) {
  return (dispatch) => {

    // need to check it is possible to delete that device

    dispatch(setFw(fw));
  }
}
