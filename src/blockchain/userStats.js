import {ProfileWithStats} from "../model/Profile";
import {getUserRep} from "./contracts";

/**
 * Should add the latest user stats pulled from the User Reputation smart contract + The Graph
 * @param profile
 * @returns {Promise<ProfileWithStats>}
 */
export async function retrieveStatsDetails(profile) {
  console.log("retrieve stats", profile);
  const userRep = await getUserRep(profile.address);
  return new ProfileWithStats(profile.address,profile.name, profile.description, profile.image,
                              userRep, "", "");
}
