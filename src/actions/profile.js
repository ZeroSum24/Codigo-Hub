import Profile from "../model/Profile";
import Box from "3box";

export const USER_DEVICES_SET = 'DEVICES_SET';
export const USER_PROFILE_SET = 'USER_PROFILE_SET';
export const USER_PASSWORD_SET = 'USER_PASSWORD_SET';
const deviceLocalStorageKey = 'devices';

function setDevices(payload) {
  // TODO update orbit DB datastore
  localStorage[deviceLocalStorageKey] = JSON.stringify(payload);
  return {
    type: USER_DEVICES_SET,
    payload
  };
}


function setProfile(payload) {
  return {
    type: USER_PROFILE_SET,
    payload
  };
}

export function setProfilePassword(payload) {
  return {
    type: USER_PASSWORD_SET,
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
 * Reads available user devices from the browser cache
 */
export function initUserDevices() {
  return async (dispatch) => {
    let devices = [];
    if (localStorage[deviceLocalStorageKey]) {
      try{
        devices = JSON.parse(localStorage['devices']);
      } catch (e) {
        devices = [];
      }
    }
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
export function updateUserDevice(device) {
  return (dispatch) => {

    // TODO update orbit DB datastore
    // need to check the device is unique based on naming convention first
    dispatch(setDevices(device));
  }
}

/**
 * Remove a device from the list based on index.
 * TODO implement UI binding and functionality
 * @param {Device} device
 * @param {Device[]} devices
 * @returns {function(...[*]=)}
 */
export function deleteDevice(device, devices) {
  return (dispatch) => {
    // need to check it is possible to delete that device
    dispatch(setDevices(devices.filter(d => d!== device)));
  }
}


export function setUserProfile(payload) {
  return async (dispatch) => {

    // Get user profile using 3box address and wrap in Profile model object
    const publicProfile = await Box.getProfile(payload.userAddress);
    const userProfile = new Profile(payload.userAddress, publicProfile.name,
      publicProfile.description, publicProfile.image, publicProfile.website);

    dispatch(setProfile({userProfile: userProfile}));
  }
}
