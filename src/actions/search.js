import { retrieveAllAvailableFirmware, getAllUsers, retrieveAllBounties } from '../blockchain/contracts';

export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SearchStatus ={
  COMPLETED: 'COMPLETED',
  ERROR: 'ERROR',
  LOADING: 'LOADING'
};

export function searchPending(payload) {
  return {
    type: SEARCH_START,
    payload
  };
}

function searchSuccess(payload) {
  return {
    type: SEARCH_SUCCESS,
    payload
  };
}

function searchFailure(payload) {
  return {
    type: SEARCH_FAILURE,
    payload
  };
}

function containsIgnoreCase(string, term) {
  return string.toLowerCase().indexOf(term.toLowerCase()) !== -1;
}

/**
 *
 * @param term
 * @param {Firmware} firmware
 * @return {boolean}
 */
function isFirmwareRelevant(term, firmware) {
  return containsIgnoreCase(firmware.description, term) ||
    containsIgnoreCase(firmware.developer, term) ||
    containsIgnoreCase(firmware.device_type, term)
}

/**
 *
 * @param term
 * @param {Bounty} bounty
 * @return {boolean}
 */
function isBountyRelevant(term, bounty) {
  console.log(bounty);
  return containsIgnoreCase(bounty.description, term) ||
    containsIgnoreCase(bounty.model, term) ||
    containsIgnoreCase(bounty.title, term) ||
    containsIgnoreCase(bounty.bountySetter, term);

}

function isDeviceRelevant(term, device) {
  return containsIgnoreCase(device.name, term) ||
  containsIgnoreCase(device.brand, term) ||
  containsIgnoreCase(device.model, term);
}

export function startSearch(searchText, devices) {
  return async (dispatch) => {

    dispatch(searchPending(searchText));

    try {

      // TODO async and ideally 'simultaneously' call the following functions, replace as needed
      // search firmware on Codigo blockchain for token inclusion
      let firmwareResults = (await retrieveAllAvailableFirmware()).filter(f => isFirmwareRelevant(searchText, f)); // list of firmware objects
      // search users on user reputation blockchian for user inclusion
      let userResults = (await getAllUsers()).filter(u => containsIgnoreCase(searchText, u));
      // search bounties on the bounty blockchain for bounty inclusion
      let bountyResults = (await  retrieveAllBounties()).filter(b => isBountyRelevant(searchText, b));
      // device bounties
      let deviceResults = devices.filter(d => isDeviceRelevant(searchText, d));

      dispatch(searchSuccess({firmwareResults: firmwareResults, userResults: userResults,
        bountyResults: bountyResults, deviceResults: deviceResults})
      );

    } catch (error) {
      // User denied account access...
      console.log('search error caught', error);
      dispatch(searchFailure('Something was wrong. Try again'));
    }
  }
}
