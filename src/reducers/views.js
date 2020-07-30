import { VIEW_FIRMWARE_SET, VIEW_PROFILE_SET, VIEW_BOUNTY_SET } from '../actions/view';

export default function views(state = {
  firmwareView: {},
  bountyView: {},
  profileWithStats: {},
  profileFirmwareHistory: []
}, action) {
  switch (action.type) {
    case VIEW_FIRMWARE_SET:
      return Object.assign({}, state, {
        firmwareView: action.payload,
      });
    case VIEW_PROFILE_SET:
      return Object.assign({}, state, {
        profileWithStats: action.payload.profileWithStats,
        profileFirmwareHistory: action.payload.profileFirmwareHistory
      });
    case VIEW_BOUNTY_SET:
      return Object.assign({}, state, {
        bountyView: action.payload,
      });
    default:
      return state;
  }
}