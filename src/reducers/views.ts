import { VIEW_FIRMWARE_SET, VIEW_PROFILE_SET, VIEW_BOUNTY_SET } from '../actions/view';
import { State, defaultState } from '../model/State';

export default function views(state : State = defaultState, action : any) : State {
  switch (action.type) {
    case VIEW_FIRMWARE_SET:
      return Object.assign({}, state, {
        firmwareStats: action.payload.firmwareStats,
        firmwareSource: action.payload.firmwareSource,
        firmwareDeveloper: action.payload.firmwareDeveloper,
        mineLike: action.payload.mineLike,
      });
    case VIEW_PROFILE_SET:
      return Object.assign({}, state, {
        profileWithStats: action.payload.profileWithStats
      });
    case VIEW_BOUNTY_SET:
      return Object.assign({}, state, {
        bountyDetails: action.payload.bountyDetails,
        bountyProposer: action.payload.bountyProposer
      });
    default:
      return state;
  }
}