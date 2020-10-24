import { CHANGE_SIDEBAR_VISIBILITY, CHANGE_SIDEBAR_POSITION, OPEN_SIDEBAR, CLOSE_SIDEBAR, CHANGE_ACTIVE_SIDEBAR_ITEM } from '../actions/navigation';
import { State, defaultState } from '../model/State';

export default function runtime(state : State = defaultState, action : any) : State {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpened: true,
      });
    case CLOSE_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpened: false,
      });
    case CHANGE_SIDEBAR_POSITION:
      return Object.assign({}, state, {
        sidebarPosition: action.payload,
      });
    case CHANGE_SIDEBAR_VISIBILITY:
      return Object.assign({}, state, {
        sidebarVisibility: action.payload,
      });
    case CHANGE_ACTIVE_SIDEBAR_ITEM:
      return {
        ...state,
        activeItem: action.activeItem,
      };
    default:
      return state;
  }
}
