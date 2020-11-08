import { ModelAction } from '../actions/model';
import { State, defaultState } from '../model/State';
import { Action } from '../model/Action';
import Firmware from '../model/Firmware';
import Bounty from '../model/Bounty';

export default function model(state : State = defaultState, action : Action<ModelAction, Bounty[] | Firmware[]>) : State {
  switch (action.type) {
    case ModelAction.SetBounties:
      return {
        ...state,
        bountyList: action.payload as Bounty[]
      }
    case ModelAction.SetFirmware:
      return {
        ...state,
        firmwareList: action.payload as Firmware[]
      }
    default:
      return state;
  }
}
