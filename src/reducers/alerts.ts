import { AlertsActionType, AlertsAction } from '../actions/alerts';
import { State, defaultState } from '../model/State';

export default function alertsReducer(state : State = defaultState, action : AlertsAction) : State {
  let index = 0;
  switch (action.type) {
    case AlertsActionType.DismissAlert:
      state.alertsList.forEach((alert, alertIndex) => {
        if (alert.id === action.payload) {
          index = alertIndex;
        }
      });
      return {
        ...state,
        alertsList: [
          ...state.alertsList.slice(0, index),
          ...state.alertsList.slice(index + 1),
        ]
      }
    default:
      return state;
  }
}
