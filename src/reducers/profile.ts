import { ProfileAction } from '../actions/profile';
import { State, defaultState } from '../model/State';
import { Action } from '../model/Action';
import Profile from '../model/Profile';
import Device from '../model/Device';

export default function profile(state : State = defaultState, action : Action<ProfileAction, Device[] | { userProfile : Profile } | { userPassword : string }>) : State {
  switch (action.type) {
    case ProfileAction.UserDevicesSet:
      return {
        ...state,
        addDeviceSuccess: true,
        deviceList: action.payload as Device[],
      };
    case ProfileAction.UserProfileSet:
      console.log("user profile set", action.payload);
      return {
        ...state,
        userProfile: (action.payload as { userProfile : Profile }).userProfile
      };
    case ProfileAction.UserPasswordSet:
      console.log("user password set", action.payload);
      return {
        ...state,
        userPassword: (action.payload as { userPassword : string }).userPassword
      };
    default:
      return state;
  }
}
