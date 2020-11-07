import { ModelAction } from '../actions/model';
import { State, defaultState } from '../model/State';

export default function model(state : State = defaultState, action : any) : State {
  switch (action.type) {
    case ModelAction.SetBounties:
      return Object.assign({}, state, {
        bountyList: action.payload
      });
    case ModelAction.SetFirmware:
      return Object.assign({}, state, {
        firmwareList: action.payload
      });
    default:
      return state;
  }
}
