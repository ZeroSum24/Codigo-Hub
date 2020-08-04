import {retrieveFirmwareHistory} from "../blockchain/firmwareHistory";
import {retrieveStatsDetails} from "../blockchain/userStats";
import {FirmwareWithThumbs} from "../model/Firmware";
import {ProfileWithStats} from "../model/Profile";
import { getFirmwareLikes } from '../blockchain/contracts';
import { downloadSourceCode } from '../filecoin/client';

export const VIEW_FIRMWARE_SET = "VIEW_FIRMWARE_SET";
export const VIEW_PROFILE_SET = "VIEW_PROFILE_SET";
export const VIEW_BOUNTY_SET = "VIEW_BOUNTY_SET";


function setFirmware(payload) {
  return {
    type: VIEW_FIRMWARE_SET,
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
    type: VIEW_BOUNTY_SET,
    payload
  }
}

export function initFirmwareView(payload) {

  return async (dispatch) => {
    const fw = payload.firmwareObj;
    const {likes, dislikes, mine} = await getFirmwareLikes(fw.block);
    let firmwareStats = new FirmwareWithThumbs(fw.hash, fw.IPFS_link, fw.description, fw.block,
      fw.developer, fw.device_type, likes, dislikes);
    let firmwareSource = await downloadSourceCode(fw.IPFS_link).catch(() => 'Coulnt be fetched');
    // TODO pull the user info from the backend necessary for the firmware page
    let firmwareDeveloper = new ProfileWithStats("", "", "","", "",
      "", "");

    // change the app location and set the firmware page
    dispatch(setFirmware({firmwareStats: firmwareStats, firmwareSource: firmwareSource, firmwareDeveloper: firmwareDeveloper, mineLike: mine}));
    payload.history.push('/app/firmware');
  }
}

/**
 * Pull all the info from the backend necessary for the profile page.
 * @param payload
 * @returns {function(...[*]=)}
 */
export function initProfileView(payload) {

  return async (dispatch) => {

    console.log("initial initProfileView", payload);

    let profileWithStats = await retrieveStatsDetails(payload.profile);
    let profileFirmwareHistory = retrieveFirmwareHistory(payload.profile.address);

    // change the app location and set the firmware page
    dispatch(setProfile({profileWithStats: profileWithStats, profileFirmwareHistory: profileFirmwareHistory}));
    payload.history.push('/app/profile');
  }
}

export function initBountyView(payload) {

  return (dispatch) => {

    // TODO pull all the info from the backend necessary for the bounty page

    //TODO return this object using the address of bounty.bountySetter
    let bountyProposer = new ProfileWithStats(payload.bountyObject.bountySetter, "", "","", "",
      "", "");

    // change the app location and set the firmware page
    dispatch(setBounty({bountyDetails: payload.bountyObject, bountyProposer: bountyProposer}));
    payload.history.push('/app/bounty');
  }
}
