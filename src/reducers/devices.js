import { DEVICES_CREATE, DEVICES_UPDATE, DEVICES_DELETE, DEVICES_SET,
  DEVICES_ADDING_DEVICE } from '../actions/profile';

export default function devices(state = {
  showAddDevice: false,
  deviceList: []
}, action) {
  switch (action.type) {
    case DEVICES_SET:
      return Object.assign({}, state, {
        showAddDevice: false,
        deviceList: action.payload,
      });
    case DEVICES_ADDING_DEVICE:
      return Object.assign({}, state, {
        showAddDevice: !state.showAddDevice,
        deviceList: state.deviceList
      });
    default:
      return state;
  }
}
