import { DEVICES_SET } from '../actions/profile';

export default function firmware(state = {
  addFirmwareSuccess: false,
  firmwareList: []
}, action) {
  switch (action.type) {
    case FIRMWARE_SET:
      return Object.assign({}, state, {
        addFirmwareSuccess: true,
        firmwareList: action.payload,
      });
    default:
      return state;
  }
}
