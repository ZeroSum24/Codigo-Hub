import { DISMISS_ALERT } from '../actions/alerts';
import { State, defaultState } from '../model/State';

export default function alertsReducer(state : State = defaultState, action : any) : State {
  let index = 0;
  switch (action.type) {
    case DISMISS_ALERT:
      state.alertsList.forEach((alert, alertIndex) => {
        if (alert.id === action.id) {
          index = alertIndex;
        }
      });
      return Object.assign({}, state, {
        alertsList: [
          ...state.alertsList.slice(0, index),
          ...state.alertsList.slice(index + 1),
        ],
      });
    default:
      return state;
  }
}
