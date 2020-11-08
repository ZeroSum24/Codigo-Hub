import { ViewActionType, ViewAction } from '../actions/view';
import { State, defaultState } from '../model/State';

export default function views(state : State = defaultState, action : ViewAction) : State {
  switch (action.type) {
    case ViewActionType.FirmwareSet:
      return {
        ...state,
        firmwareStats: action.payload.firmwareStats,
        firmwareSource: action.payload.firmwareSource,
        firmwareDeveloper: action.payload.firmwareDeveloper,
        mineLike: action.payload.mineLike,
      };
    case ViewActionType.ProfileSet:
      return {
        ...state,
        profileWithStats: action.payload.profileWithStats
      };
    case ViewActionType.BountySet:
      return {
        ...state,
        bountyDetails: action.payload.bountyDetails,
        bountyProposer: action.payload.bountyProposer
      };
    default:
      return state;
  }
}