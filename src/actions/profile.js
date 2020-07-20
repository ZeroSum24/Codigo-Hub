export const DEVICES_CREATE = 'DEVICES_CREATE';
export const DEVICES_UPDATE = 'DEVICES_GET';
export const DEVICES_DELETE = 'DEVICES_ADD';
export const DEVICES_SET = 'DEVICES_SET';
export const DEVICES_ADDING_DEVICE = 'DEVICES_ADDING_DEVICE';



function removeDevice(payload) {
  return {
    type: DEVICES_DELETE,
    payload
  };
}

function addDevice(payload) {
  return {
    type: DEVICES_CREATE,
    payload,
  };
}

function updateDevice(payload) {
  return {
    type: DEVICES_UPDATE,
    payload
  };
}

function changeAddDeviceView() {
  return {
    type: DEVICES_ADDING_DEVICE
  };
}

export function setUserDevices(device) {
  return (dispatch) => {

    // TODO update orbit DB datastore

    dispatch(addDevice(device));
  }
}

export function createUserDevice(device) {
  return (dispatch) => {

    // TODO update orbit DB datastore

    dispatch(addDevice(device));
  }
}

export function updateUserDevice(device) {
  return (dispatch) => {

    // TODO update orbit DB datastore

    // need to check the device is unique based on naming convention first

    dispatch(updateDevice(device));
  }
}

export function deleteUserDevice(device) {
  return (dispatch) => {

    // TODO update orbit DB datastore

    // need to check it is possible to delete that device

    dispatch(removeDevice(device));
  }
}


export function interactAddDeviceView() {
  console.log('have clicked open device view');
  return (dispatch) => {
    dispatch(changeAddDeviceView());
  }
}