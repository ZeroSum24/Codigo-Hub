import { DEVICES_SET } from '../actions/profile';

export default function devices(state = {
  addDeviceSuccess: false,
  deviceList: []
}, action) {
  switch (action.type) {
    case DEVICES_SET:
      return Object.assign({}, state, {
        addDeviceSuccess: true,
        deviceList: action.payload,
      });
    default:
      return state;
  }
}
