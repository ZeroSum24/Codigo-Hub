import { Action } from '../model/Action';

export enum AlertsActionType {
  DismissAlert = 'DISMISS_ALERT'
}

export interface DismissAlert extends Action<AlertsActionType.DismissAlert> {
  readonly payload : number
}
export type AlertsAction = DismissAlert;

export function dismissAlert(id : number) : DismissAlert {
  return {
    type: AlertsActionType.DismissAlert,
    payload: id,
  };
}
