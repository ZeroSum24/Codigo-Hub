import {USER_DEVICES_SET, USER_PASSWORD_SET, USER_PROFILE_SET} from '../actions/profile';

export default function profile(state = {
  addDeviceSuccess: false,
  deviceList: [],
  userProfile: {},
  userPassword: ''
}, action) {
  switch (action.type) {
    case USER_DEVICES_SET:
      return Object.assign({}, state, {
        addDeviceSuccess: true,
        deviceList: action.payload,
      });
    case USER_PROFILE_SET:
      console.log("user profile set", action.payload);
      return Object.assign({}, state, {
        userProfile: action.payload.userProfile
      });
    case USER_PASSWORD_SET:
      console.log("user password set", action.payload);
      return Object.assign({}, state, {
        userPassword: action.payload.userPassword
      });
    default:
      return state;
  }
}
