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

export function userVotingCallback(votingPower, profileAddr) {

  console.log("Voting occurred", votingPower, profileAddr);
  if (votingPower === 1) {
    // positive vote
  } else if (votingPower === -1) {
    // negative vote
  }
}