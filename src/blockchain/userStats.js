import {ProfileWithStats} from "../model/Profile";

/**
 * Should add the latest user stats pulled from the User Reputation smart contract + The Graph
 * @param profile
 * @returns {ProfileWithStats}
 */
export function retrieveStatsDetails(profile) {
  console.log("retrieve stats", profile);
  return new ProfileWithStats(profile.address,profile.name, profile.description, profile.image,
    "", "", "")
}
