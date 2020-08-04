import {ProfileWithStats} from "../model/Profile";
import { getUserRep, addRepToUser, removeRepFromUser } from "./contracts";

/**
 * Should add the latest user stats pulled from the User Reputation smart contract + The Graph
 * @param profile
 * @param numFirmwareContributions
 * @returns {Promise<ProfileWithStats>}
 */
export async function retrieveStatsDetails(profile, numFirmwareContributions) {
  console.log("retrieve stats", profile);
  const userRep = await getUserRep(profile.address);
  return new ProfileWithStats(profile.address,profile.name, profile.description, profile.image,
                              userRep, "", numFirmwareContributions);
}

export function userVotingCallback(votingPower, profileAddr) {

  console.log("Voting occurred", votingPower, profileAddr);
  if (votingPower === 1) {
      addRepToUser(profileAddr);
  } else if (votingPower === -1) {
      removeRepFromUser(profileAddr);
  }
}
