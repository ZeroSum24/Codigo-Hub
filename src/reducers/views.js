import { VIEW_FIRMWARE_SET, VIEW_PROFILE_SET, VIEW_BOUNTY_SET } from '../actions/view';

export default function views(state = {
  firmwareView: {},
  profileView: {},
  bountyView: {}
}, action) {
  switch (action.type) {
    case VIEW_FIRMWARE_SET:
      return Object.assign({}, state, {
        firmwareView: action.payload,
      });
    case VIEW_PROFILE_SET:
      return Object.assign({}, state, {
        profileView: action.payload,
      });
    case VIEW_BOUNTY_SET:
      return Object.assign({}, state, {
        bountyView: action.payload,
      });
    default:
      return state;
  }
}