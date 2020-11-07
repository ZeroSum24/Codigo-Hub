import { Action } from '../model/Action';

export const enum AlertsAction {
  DismissAlert = 'DISMISS_ALERT'
}

export function dismissAlert(id : number) : Action<AlertsAction.DismissAlert, number> {
  return {
    type: AlertsAction.DismissAlert,
    payload: id,
  };
}
