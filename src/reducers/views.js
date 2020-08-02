import { VIEW_FIRMWARE_SET, VIEW_PROFILE_SET, VIEW_BOUNTY_SET } from '../actions/view';

export default function views(state = {
  firmwareStats: {},
  firmwareSource: '',
  firmwareDeveloper: {},
  bountyDetails: {},
  bountyProposer: {},
  profileWithStats: {},
  profileFirmwareHistory: [],
}, action) {
  switch (action.type) {
    case VIEW_FIRMWARE_SET:
      return Object.assign({}, state, {
        firmwareStats: action.payload.firmwareStats,
        firmwareSource: action.payload.firmwareSource,
        firmwareDeveloper: action.payload.firmwareDeveloper
      });
    case VIEW_PROFILE_SET:
      return Object.assign({}, state, {
        profileWithStats: action.payload.profileWithStats,
        profileFirmwareHistory: action.payload.profileFirmwareHistory
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