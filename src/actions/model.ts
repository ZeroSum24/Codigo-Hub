import { retrieveAllAvailableFirmware, retrieveAllBounties } from "../blockchain/contracts";
import Bounty from '../model/Bounty';
import { Action, DispatchedAction } from '../model/Action';
import Firmware from "../model/Firmware";

export enum ModelActionType {
  SetBounties = 'MODEL_SET_BOUNTIES',
  SetFirmware = 'MODEL_SET_FIRMWARE',
}

interface SetBounties extends Action<ModelActionType.SetBounties> {
  readonly payload : Bounty[]
};
interface SetFirmware extends Action<ModelActionType.SetFirmware> {
  readonly payload : Firmware[]
};
export type ModelAction = SetBounties | SetFirmware;

function setBounty(payload : Bounty[]) : SetBounties {
  return {
    type: ModelActionType.SetBounties,
    payload
  }
}

export function setBounties() : DispatchedAction<ModelActionType.SetBounties> {
  return async (dispatch) => {

    const bounties = await retrieveAllBounties();
    dispatch(setBounty(bounties));
  }
}

function setFw(payload : Firmware[]) : SetFirmware {
  return {
    type: ModelActionType.SetFirmware,
    payload
  };
}

/**
 * Sets the users devices without preforming any operation on it. Called at login once retrieving
 * the users profile details.
 * //TODO implement retrieval of data at login
 * @returns {function(...[*]=)}
 */
export function setFirmware() : DispatchedAction<ModelActionType.SetFirmware> {
  return async (dispatch) => {
    const fw = await retrieveAllAvailableFirmware();
    dispatch(setFw(fw));
  }
}
