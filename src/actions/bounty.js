import { MODEL_SET_BOUNTIES } from './model';

function setBounty(payload) {
  return {
    type: MODEL_SET_BOUNTIES,
    payload
  }
}

export function setBounties(bs) {
  return (dispatch) => {
    dispatch(setBounty(bs));
  }
}