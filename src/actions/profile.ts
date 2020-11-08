import Box from '3box';
import Profile, { ProfileWithStats } from "../model/Profile";
import Device from "../model/Device";
import { Action, DispatchedAction } from "../model/Action";

export const enum ProfileAction {
  UserDevicesSet = 'DEVICES_SET',
  UserProfileSet = 'USER_PROFILE_SET',
  UserPasswordSet = 'USER_PASSWORD_SET'
}

const deviceLocalStorageKey = 'devices';

function setDevices(payload : Device[]) : Action<ProfileAction.UserDevicesSet, Device[]> {
  // TODO update orbit DB datastore
  localStorage[deviceLocalStorageKey] = JSON.stringify(payload);
  return {
    type: ProfileAction.UserDevicesSet,
    payload
  };
}


function setProfile(payload : {userProfile: Profile}) : Action<ProfileAction.UserProfileSet, { userProfile : Profile }> {
  return {
    type: ProfileAction.UserProfileSet,
    payload
  };
}

export function setProfilePassword(payload : {userPassword: string}) : Action<ProfileAction.UserPasswordSet, { userPassword : string }> {
  return {
    type: ProfileAction.UserPasswordSet,
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
export function setUserDevices(devices : Device[]) : DispatchedAction<ProfileAction.UserDevicesSet> {
  return (dispatch) => {
    dispatch(setDevices(devices));
  }
}

/**
 * Reads available user devices from the browser cache
 */
export function initUserDevices() : DispatchedAction<ProfileAction.UserDevicesSet> {
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
export function createUserDevice(devices : Device[], device : Device) : DispatchedAction<ProfileAction.UserDevicesSet> {
  return (dispatch) => {
    devices.push(device);
    dispatch(setDevices(devices));
  }
}

//TODO: Doesn't typecheck and is never used
/**
 * Replaces an item in the device list.
 * TODO implement UI binding and functionality
 * @param device
 * @returns {function(...[*]=)}
 */
/*export function updateUserDevice(device : Device) : DispatchedAction<ProfileAction.UserDevicesSet> {
  return (dispatch) => {

    // TODO update orbit DB datastore
    // need to check the device is unique based on naming convention first
    dispatch(setDevices(device));
  }
}*/

/**
 * Remove a device from the list based on index.
 * TODO implement UI binding and functionality
 * @param {Device} device
 * @param {Device[]} devices
 * @returns {function(...[*]=)}
 */
export function deleteDevice(device : Device, devices : Device[]) : DispatchedAction<ProfileAction.UserDevicesSet> {
  return (dispatch) => {
    // need to check it is possible to delete that device
    dispatch(setDevices(devices.filter(d => d!== device)));
  }
}


export function setUserProfile(payload: {userAddress: string}) : DispatchedAction<ProfileAction.UserProfileSet> {
  return async (dispatch) => {

    // Get user profile using 3box address and wrap in Profile model object
    const publicProfile = await Box.getProfile(payload.userAddress);
    const userProfile = new Profile(payload.userAddress, publicProfile.name,
      publicProfile.description, publicProfile.image, publicProfile.website);

    dispatch(setProfile({userProfile: userProfile}));
  }
}
