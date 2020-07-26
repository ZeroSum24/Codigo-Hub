export const DEVICES_SET = 'DEVICES_SET';


function setDevices(payload) {
  // TODO update orbit DB datastore

  return {
    type: DEVICES_SET,
    payload
  };
}

/**
 * Sets the users devices without preforming any operation on it. Called at login once retrieving
 * the users profile details.
 * //TODO implement retrieval of data at login
 * @param devices
 * @returns {function(...[*]=)}
 */
export function setUserDevices(devices) {
  return (dispatch) => {
    dispatch(setDevices(devices));
  }
}

/**
 * Add to the device list.
 * TODO implement UI binding and functionality
 * @param devices the list of the users devices
 * @param device the device to be added to the list of devices
 * @returns {function(...[*]=)}
 */
export function createUserDevice(devices, device) {
  return (dispatch) => {

    devices.push(device);
    dispatch(setDevices(devices));
  }
}

/**
 * Replaces an item in the device list.
 * TODO implement UI binding and functionality
 * @param device
 * @returns {function(...[*]=)}
 */
export function updateUserDevice(devices) {
  return (dispatch) => {

    // TODO update orbit DB datastore

    // need to check the device is unique based on naming convention first

    dispatch(setDevices(devices));
  }
}

/**
 * Remove a device from the list based on index.
 * TODO implement UI binding and functionality
 * @param device
 * @returns {function(...[*]=)}
 */
export function deleteUserDevice(devices) {
  return (dispatch) => {

    // need to check it is possible to delete that device

    dispatch(setDevices(devices));
  }
}