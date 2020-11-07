import { ViewAction } from '../actions/view';
import { State, defaultState } from '../model/State';

export default function views(state : State = defaultState, action : any) : State {
  switch (action.type) {
    case ViewAction.FirmwareSet:
      return Object.assign({}, state, {
        firmwareStats: action.payload.firmwareStats,
        firmwareSource: action.payload.firmwareSource,
        firmwareDeveloper: action.payload.firmwareDeveloper,
        mineLike: action.payload.mineLike,
      });
    case ViewAction.ProfileSet:
      return Object.assign({}, state, {
        profileWithStats: action.payload.profileWithStats
      });
    case ViewAction.BountySet:
      return Object.assign({}, state, {
        bountyDetails: action.payload.bountyDetails,
        bountyProposer: action.payload.bountyProposer
      });
    default:
      return state;
  }
}