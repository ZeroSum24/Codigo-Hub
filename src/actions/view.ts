import {retrieveStatsDetails} from "../blockchain/userStats";
import Firmware, {FirmwareWithThumbs} from "../model/Firmware";
import Profile, { ProfileWithStats } from "../model/Profile";
import { getFirmwareLikes, retrieveAllMyFirmware } from '../blockchain/contracts';
import { downloadSourceCode } from '../filecoin/client';
import Box from "3box";
import { Action, DispatchedAction } from "../model/Action";
import Bounty from "../model/Bounty";

export const enum ViewAction {
  FirmwareSet = "VIEW_FIRMWARE_SET",
  ProfileSet = "VIEW_PROFILE_SET",
  BountySet = "VIEW_BOUNTY_SET"
}

export interface FirmwareData {
  firmwareStats : FirmwareWithThumbs,
  firmwareSource : string,
  firmwareDeveloper : ProfileWithStats,
  mineLike : number
}

export interface BountyData {
  bountyDetails : Bounty,
  bountyProposer : ProfileWithStats
}

function setFirmware(payload : FirmwareData) : Action<ViewAction.FirmwareSet, FirmwareData> {
  return {
    type: ViewAction.FirmwareSet,
    payload,
  }
}

function setProfile(payload : { profileWithStats : ProfileWithStats }) : Action<ViewAction.ProfileSet, { profileWithStats : ProfileWithStats }> {
  return {
    type: ViewAction.ProfileSet,
    payload
  };
}

function setBounty(payload : BountyData) : Action<ViewAction.BountySet, BountyData> {
  return {
    type: ViewAction.BountySet,
    payload
  }
}

export function initFirmwareView(payload : {firmwareObj : Firmware, history : string[]}) : DispatchedAction<ViewAction.FirmwareSet> {

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
export function initProfileView(payload : { profile : Profile, history : string[] }) : DispatchedAction<ViewAction.ProfileSet> {

  return async (dispatch) => {

    console.log("initial initProfileView", payload);

    let profileWithStats;
    if (payload.profile instanceof Profile ) {
      let profileFirmwareHistory = await retrieveAllMyFirmware(payload.profile.address);
      profileWithStats = await retrieveStatsDetails(payload.profile, profileFirmwareHistory);
    } else {
      //TODO: Never triggered as ProfileWithStats is a subtype of Profile
      profileWithStats = payload.profile
    }

    // change the app location and set the firmware page
    dispatch(setProfile({profileWithStats: profileWithStats}));
    payload.history.push('/app/profile');
  }
}

export function initBountyView(payload : {bountyObject : Bounty, history : string[]}) : DispatchedAction<ViewAction.BountySet> {

  return async (dispatch) => {

    //pulls the user info from the backend necessary for the bounty page
    let bountyProposer = await getProfileWithStats(payload.bountyObject.bountySetter.toString());

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
export async function getProfileWithStats(profileAddress : string) : Promise<ProfileWithStats> {

  // Get user profile using 3box address and wrap in Profile model object
  const boxProfile = await Box.getProfile(profileAddress);
  const userProfile = new Profile(profileAddress, boxProfile.name, boxProfile.description, boxProfile.image,
    boxProfile.website);

  // Get the users firmware history and return a
  let profileFirmwareHistory = await retrieveAllMyFirmware(userProfile.address);
  return await retrieveStatsDetails(userProfile, profileFirmwareHistory);
}

