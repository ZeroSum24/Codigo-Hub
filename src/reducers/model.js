import { MODEL_SET_BOUNTIES, MODEL_SET_FIRMWARE } from '../actions/model';

export default function model(state = {
  bountyList: [],
  firmwareList: []
}, action) {
  switch (action.type) {
    case MODEL_SET_BOUNTIES:
      return Object.assign({}, state, {
        bountyList: action.payload
      });
    case MODEL_SET_FIRMWARE:
      return Object.assign({}, state, {
        firmwareList: action.payload
      });
    default:
      return state;
  }
}
