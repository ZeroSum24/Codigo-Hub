import { retrieveAllAvailableFirmware, getAllUsers, retrieveAllBounties } from '../blockchain/contracts';
import { getProfileWithStats } from './view.js';
import { Action, DispatchedAction } from '../model/Action';
import Bounty from '../model/Bounty';
import Firmware, { FirmwareWithThumbs } from '../model/Firmware';
import { ProfileWithStats } from '../model/Profile';
import Device from '../model/Device';

export interface SearchResult {
  bountyResults : Bounty[],
  firmwareResults: Firmware[],
  userResults: ProfileWithStats[],
  deviceResults: Device[]
}

export const enum SearchAction {
  Start = 'SEARCH_START',
  Success = 'SEARCH_SUCCESS',
  Failure = 'SEARCH_FAILURE'
};

export const enum SearchStatus {
  Completed = 'COMPLETED',
  Error = 'ERROR',
  Loading = 'LOADING'
}

export function searchPending(payload : string) : Action<SearchAction.Start, string> {
  return {
    type: SearchAction.Start,
    payload
  };
}

function searchSuccess(payload : SearchResult) : Action<SearchAction.Success, SearchResult> {
  return {
    type: SearchAction.Success,
    payload
  };
}

function searchFailure(payload : string) : Action<SearchAction.Failure, string> {
  return {
    type: SearchAction.Failure,
    payload
  };
}

function containsIgnoreCase(string : string, term : string) : boolean {
  if (string == null || term == null) {
    return false;
  }
  return string.toLowerCase().indexOf(term.toLowerCase()) !== -1;
}

/**
 *
 * @param term
 * @param {Firmware} firmware
 * @return {boolean}
 */
function isFirmwareRelevant(term : string, firmware : Firmware) : boolean {
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
function isBountyRelevant(term : string, bounty : Bounty) : boolean {
  return containsIgnoreCase(bounty.description, term) ||
    containsIgnoreCase(bounty.model, term) ||
    containsIgnoreCase(bounty.title, term) ||
    containsIgnoreCase(bounty.bountySetter.toString(), term);

}

function isDeviceRelevant(term : string, device : Device) : boolean {
  return containsIgnoreCase(device.name, term) ||
  containsIgnoreCase(device.brand, term) ||
  containsIgnoreCase(device.model, term);
}

function isUserRelevant(term : string, user : ProfileWithStats) : boolean {
  return containsIgnoreCase(user.address, term) ||
         containsIgnoreCase(user.name, term);
}

export function startSearch(searchText : string, devices : Device[]) : DispatchedAction<SearchAction> {
  return async (dispatch) => {

    dispatch(searchPending(searchText));

    try {

      // TODO async and ideally 'simultaneously' call the following functions, replace as needed
      // search firmware on Codigo blockchain for token inclusion
      let firmwareResults = (await retrieveAllAvailableFirmware()).filter(f => isFirmwareRelevant(searchText, f)); // list of firmware objects
      // search users on user reputation blockchian for user inclusion
      let userAddresses = await getAllUsers();
      let userProfiles = await Promise.all(userAddresses.map(x => getProfileWithStats(x)));
      let userResults = userProfiles.filter(u => isUserRelevant(searchText, u));
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
