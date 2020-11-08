import { ModelActionType, ModelAction } from '../actions/model';
import { State, defaultState } from '../model/State';

export default function model(state : State = defaultState, action : ModelAction) : State {
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
