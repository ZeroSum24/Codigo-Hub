export const VIEW_FIRMWARE_SET = "VIEW_FIRMWARE_SET";
export const VIEW_PROFILE_SET = "VIEW_PROFILE_SET";
export const VIEW_BOUNTY_SET = "VIEW_BOUNTY_SET";


function setFirmware(payload) {
  return {
    VIEW_FIRMWARE_SET,
    payload
  }
}

function setProfile(payload) {
  return {
    VIEW_PROFILE_SET,
    payload
  }
}

function setBounty(payload) {
  return {
    VIEW_BOUNTY_SET,
    payload
  }
}

export function initFirmwareView(payload) {

  return (dispatch) => {

    // TODO pull all the info from the backend necessary for the firmware page

    // change the app location and set the firmware page
    payload.history.push('/app/firmware');
    dispatch(setFirmware({firmwareObj: payload.firmwareObj}));
  }
}

export function initProfileView(payload) {

  return (dispatch) => {

    // TODO pull all the info from the backend necessary for the profile page

    // change the app location and set the firmware page
    payload.history.push('/app/profile');
    dispatch(setProfile({profileObj: payload.profileObj}));
  }
}

export function initBountyView(payload) {

  return (dispatch) => {

    // TODO pull all the info from the backend necessary for the bounty page

    // change the app location and set the firmware page
    payload.history.push('/app/bounty');
    dispatch(setBounty({bountyObj: payload.bountyObj}));
  }
}
