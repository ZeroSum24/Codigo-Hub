/* eslint-disable import/prefer-default-export */

import { Action } from '../model/Action';

export enum NavigationActionType {
  OpenSideBar = 'OPEN_SIDEBAR',
  CloseSideBar = 'CLOSE_SIDEBAR',
  ChangeActiveSideBarItem = 'CHANGE_ACTIVE_SIDEBAR_ITEM',
  ChangeSideBarPosition = 'CHANGE_SIDEBAR_POSITION',
  ChangeSidebarVisibility = 'CHANGE_SIDEBAR_VISIBILITY'
}

interface OpenSideBar extends Action<NavigationActionType.OpenSideBar> {};
interface CloseSideBar extends Action<NavigationActionType.CloseSideBar> {};
interface ChangeActiveSideBarItem extends Action<NavigationActionType.ChangeActiveSideBarItem> {
  readonly payload : string;
};
interface ChangeSideBarPosition extends Action<NavigationActionType.ChangeSideBarPosition> {
  readonly payload : string
};
interface ChangeSidebarVisibility extends Action<NavigationActionType.ChangeSidebarVisibility> {
  readonly payload : string
};
export type NavigationAction = OpenSideBar | CloseSideBar | ChangeActiveSideBarItem | ChangeSideBarPosition | ChangeSidebarVisibility;

export function openSidebar() : OpenSideBar {
  return {
    type: NavigationActionType.OpenSideBar
  };
}

export function changeSidebarPosition(nextPosition : string) : ChangeSideBarPosition {
  return {
    type: NavigationActionType.ChangeSideBarPosition,
    payload: nextPosition
  };
}

export function closeSidebar() : CloseSideBar {
  return {
    type: NavigationActionType.CloseSideBar
  };
}

export function changeActiveSidebarItem(activeItem : string) : ChangeActiveSideBarItem {
  return {
    type: NavigationActionType.ChangeActiveSideBarItem,
    payload: activeItem,
  };
}

export function changeSidebarVisibility(nextVisibility : string) : ChangeSidebarVisibility {
  return {
    type: NavigationActionType.ChangeSidebarVisibility,
    payload: nextVisibility,
  };
}
