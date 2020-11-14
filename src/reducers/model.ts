import { ModelActionType, ModelAction } from '../actions/model';
import { ModelState, defaultState } from '../model/State';

export default function model(state : ModelState = defaultState.model, action : ModelAction) : ModelState {
  switch (action.type) {
    case ModelActionType.SetBounties:
      return {
        ...state,
        bountyList: action.payload
      }
    case ModelActionType.SetFirmware:
      return {
        ...state,
        firmwareList: action.payload
      }
    default:
      return state;
  }
}
