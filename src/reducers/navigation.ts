import { NavigationActionType, NavigationAction } from '../actions/navigation';
import { NavigationState, defaultState } from '../model/State';

export default function runtime(state : NavigationState = defaultState.navigation, action : NavigationAction) : NavigationState {
  switch (action.type) {
    case NavigationActionType.OpenSideBar:
      return {
        ...state,
        sidebarOpened: true,
      };
    case NavigationActionType.CloseSideBar:
      return {
        ...state,
        sidebarOpened: false
      }
    case NavigationActionType.ChangeSideBarPosition:
      return {
        ...state,
        sidebarPosition: action.payload
      }
    case NavigationActionType.ChangeSidebarVisibility:
      return {
        ...state,
        sidebarVisibility: action.payload
      }
    case NavigationActionType.ChangeActiveSideBarItem:
      return {
        ...state,
        activeItem: action.payload,
      };
    default:
      return state;
  }
}
