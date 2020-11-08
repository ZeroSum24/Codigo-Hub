import { NavigationAction } from '../actions/navigation';
import { State, defaultState } from '../model/State';
import { Action } from '../model/Action';

export default function runtime(state : State = defaultState, action : Action<NavigationAction, string>) : State {
  switch (action.type) {
    case NavigationAction.OpenSideBar:
      return {
        ...state,
        sidebarOpened: true,
      };
    case NavigationAction.CloseSideBar:
      return {
        ...state,
        sidebarOpened: false
      }
    case NavigationAction.ChangeSiteBarPosition:
      return {
        ...state,
        sidebarPosition: action.payload
      }
    case NavigationAction.ChangeSidebarVisibility:
      return {
        ...state,
        sidebarVisibility: action.payload
      }
    case NavigationAction.ChangeActiveSideBarItem:
      return {
        ...state,
        activeItem: action.payload,
      };
    default:
      return state;
  }
}
