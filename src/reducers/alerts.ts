import { AlertsAction } from '../actions/alerts';
import { State, defaultState } from '../model/State';
import { Action } from '../model/Action';

export default function alertsReducer(state : State = defaultState, action : Action<AlertsAction, number>) : State {
  let index = 0;
  switch (action.type) {
    case AlertsAction.DismissAlert:
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
