import { ProfileAction } from '../actions/profile';
import { State, defaultState } from '../model/State';

export default function profile(state : State = defaultState, action : any) : State {
  switch (action.type) {
    case ProfileAction.UserDevicesSet:
      return Object.assign({}, state, {
        addDeviceSuccess: true,
        deviceList: action.payload,
      });
    case ProfileAction.UserProfileSet:
      console.log("user profile set", action.payload);
      return Object.assign({}, state, {
        userProfile: action.payload.userProfile
      });
    case ProfileAction.UserPasswordSet:
      console.log("user password set", action.payload);
      return Object.assign({}, state, {
        userPassword: action.payload.userPassword
      });
    default:
      return state;
  }
}
