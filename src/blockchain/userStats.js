

export function retrieveStatsDetails(targetAddress, currentUserAddr) {
  // TODO return profile details -- consult the redux state if current user
  return getProfileDetails(targetAddress)
}


function getProfileDetails(address) {
  return {'address': address}
}
