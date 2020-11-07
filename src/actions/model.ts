import { retrieveAllAvailableFirmware, retrieveAllBounties } from "../blockchain/contracts";
import Bounty from '../model/Bounty';
import { Action, DispatchedAction } from '../model/Action';
import Firmware from "../model/Firmware";

export const enum ModelAction {
  SetBounties = 'MODEL_SET_BOUNTIES',
  SetFirmware = 'MODEL_SET_FIRMWARE',
}

function setBounty(payload : Bounty[]) : Action<ModelAction.SetBounties, Bounty[]> {
  return {
    type: ModelAction.SetBounties,
    payload
  }
}

export function setBounties() : DispatchedAction<ModelAction.SetBounties> {
  return async (dispatch) => {

    const bounties = await retrieveAllBounties();
    dispatch(setBounty(bounties));
  }
}

function setFw(payload : Firmware[]) : Action<ModelAction.SetFirmware, Firmware[]> {
  return {
    type: ModelAction.SetFirmware,
    payload
  };
}

/**
 * Sets the users devices without preforming any operation on it. Called at login once retrieving
 * the users profile details.
 * //TODO implement retrieval of data at login
 * @returns {function(...[*]=)}
 */
export function setFirmware() : DispatchedAction<ModelAction.SetFirmware> {
  return async (dispatch) => {
    const fw = await retrieveAllAvailableFirmware();
    dispatch(setFw(fw));
  }
}
