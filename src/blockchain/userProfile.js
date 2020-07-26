import Profile from "../model/Profile";


export function retrieveProfileDetails(targetAddress, currentUserAddr) {
  // TODO return profile details -- consult the redux state if current user
  return getProfileDetails(targetAddress)
}


function getProfileDetails(address) {
  return new Profile(address, '', '', '')
}