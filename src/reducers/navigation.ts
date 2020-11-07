import { NavigationAction } from '../actions/navigation';
import { State, defaultState } from '../model/State';

export default function runtime(state : State = defaultState, action : any) : State {
  switch (action.type) {
    case NavigationAction.OpenSideBar:
      return Object.assign({}, state, {
        sidebarOpened: true,
      });
    case NavigationAction.CloseSideBar:
      return Object.assign({}, state, {
        sidebarOpened: false,
      });
    case NavigationAction.ChangeSiteBarPosition:
      return Object.assign({}, state, {
        sidebarPosition: action.payload,
      });
    case NavigationAction.ChangeSidebarVisibility:
      return Object.assign({}, state, {
        sidebarVisibility: action.payload,
      });
    case NavigationAction.ChangeActiveSideBarItem:
      return {
        ...state,
        activeItem: action.activeItem,
      };
    default:
      return state;
  }
}
