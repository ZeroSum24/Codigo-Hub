import {retrieveStatsDetails} from "../blockchain/userStats";
import {FirmwareWithThumbs} from "../model/Firmware";
import Profile, {ProfileWithStats} from "../model/Profile";
import { getFirmwareLikes, retrieveAllMyFirmware } from '../blockchain/contracts';
import { downloadSourceCode } from '../filecoin/client';
import Box from "3box";

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

    // pulls the user info from the backend necessary for the firmware page
    let firmwareDeveloper = await getProfileWithStats(fw.developer);

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

    let profileWithStats;
    if (payload.profile instanceof Profile ) {
      let profileFirmwareHistory = await retrieveAllMyFirmware(payload.profile.address);
      profileWithStats = await retrieveStatsDetails(payload.profile, profileFirmwareHistory);
    } else {
      profileWithStats = payload.profile
    }

    // change the app location and set the firmware page
    dispatch(setProfile({profileWithStats: profileWithStats}));
    payload.history.push('/app/profile');
  }
}

export function initBountyView(payload) {

  return async (dispatch) => {

    //pulls the user info from the backend necessary for the bounty page
    let bountyProposer = await getProfileWithStats(payload.bountyObject.bountySetter);

    // change the app location and set the firmware page
    dispatch(setBounty({bountyDetails: payload.bountyObject, bountyProposer: bountyProposer}));
    payload.history.push('/app/bounty');
  }
}

/**
 * Uses 3box to get publicly available profile information about a given user to be displayed by our app.
 * @param profileAddress
 * @returns {Promise<ProfileWithStats>}
 */
export async function getProfileWithStats(profileAddress) {

  // Get user profile using 3box address and wrap in Profile model object
  const boxProfile = await Box.getProfile(profileAddress);
  const userProfile = new Profile(profileAddress, boxProfile.name, boxProfile.description, boxProfile.image,
    boxProfile.website);

  // Get the users firmware history and return a
  let profileFirmwareHistory = await retrieveAllMyFirmware(userProfile.address);
  return await retrieveStatsDetails(userProfile, profileFirmwareHistory);
}

