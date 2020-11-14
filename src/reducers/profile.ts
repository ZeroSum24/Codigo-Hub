import { ProfileActionType, ProfileAction } from '../actions/profile';
import { ProfileState, defaultState } from '../model/State';

export default function profile(state : ProfileState = defaultState.profile, action : ProfileAction) : ProfileState {
  switch (action.type) {
    case ProfileActionType.UserDevicesSet:
      return {
        ...state,
        addDeviceSuccess: true,
        deviceList: action.payload,
      };
    case ProfileActionType.UserProfileSet:
      console.log("user profile set", action.payload);
      return {
        ...state,
        userProfile: action.payload.userProfile
      };
    case ProfileActionType.UserPasswordSet:
      console.log("user password set", action.payload);
      return {
        ...state,
        userPassword: action.payload.userPassword
      };
    default:
      return state;
  }
}
