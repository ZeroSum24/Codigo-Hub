import {retrieveFirmwareHistory} from "../blockchain/firmwareHistory";
import {retrieveStatsDetails} from "../blockchain/userStats";
import {SEARCH_SUCCESS} from "./search";

export const VIEW_FIRMWARE_SET = "VIEW_FIRMWARE_SET";
export const VIEW_PROFILE_SET = "VIEW_PROFILE_SET";
export const VIEW_BOUNTY_SET = "VIEW_BOUNTY_SET";


function setFirmware(payload) {
  return {
    VIEW_FIRMWARE_SET,
    payload,
  }
}

function setProfile(payload) {
  return {
    type: VIEW_PROFILE_SET,
    payload
  };
}

function setBounty(payload) {
  return {
    VIEW_BOUNTY_SET,
    payload,
  }
}

export function initFirmwareView(payload) {

  return (dispatch) => {

    // TODO pull all the info from the backend necessary for the firmware page

    // change the app location and set the firmware page
    dispatch(setFirmware({firmwareView: payload.firmwareObj}));
    payload.history.push('/app/firmware');
  }
}

/**
 * Pull all the info from the backend necessary for the profile page.
 * @param payload
 * @returns {function(...[*]=)}
 */
export function initProfileView(payload) {

  return (dispatch) => {

    console.log("initial initProfileView", payload);

    let profileWithStats = retrieveStatsDetails(payload.profile);
    let profileFirmwareHistory = retrieveFirmwareHistory(payload.profile.address);

    console.log("init profile view", profileWithStats, profileFirmwareHistory, typeof profileWithStats, typeof profileFirmwareHistory)

    // change the app location and set the firmware page
    dispatch(setProfile({profileWithStats: profileWithStats, profileFirmwareHistory: profileFirmwareHistory}));
    payload.history.push('/app/profile');
  }
}

export function initBountyView(payload) {

  return (dispatch) => {

    // TODO pull all the info from the backend necessary for the bounty page

    // change the app location and set the firmware page
    dispatch(setBounty({bountyView: payload.bountyObj}));
    payload.history.push('/app/bounty');
  }
}
