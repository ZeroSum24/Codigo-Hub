import { USER_DEVICES_SET, USER_PROFILE_SET } from '../actions/profile';

export default function profile(state = {
  addDeviceSuccess: false,
  deviceList: [],
  userProfile: {}
}, action) {
  switch (action.type) {
    case USER_DEVICES_SET:
      return Object.assign({}, state, {
        addDeviceSuccess: true,
        deviceList: action.payload,
      });
    case USER_PROFILE_SET:
      console.log("user profile set", action.payload)
      return Object.assign({}, state, {
        userProfile: action.payload
      });
    default:
      return state;
  }
}
