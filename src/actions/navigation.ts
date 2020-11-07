/* eslint-disable import/prefer-default-export */

import { Action, EmptyAction } from '../model/Action';

export const enum NavigationAction {
  OpenSideBar = 'OPEN_SIDEBAR',
  CloseSideBar = 'CLOSE_SIDEBAR',
  ChangeActiveSideBarItem = 'CHANGE_ACTIVE_SIDEBAR_ITEM',
  ChangeSiteBarPosition = 'CHANGE_SIDEBAR_POSITION',
  ChangeSidebarVisibility = 'CHANGE_SIDEBAR_VISIBILITY'
}

export function openSidebar() : EmptyAction<NavigationAction.OpenSideBar> {
  return {
    type: NavigationAction.OpenSideBar
  };
}

export function changeSidebarPosition(nextPosition : string) : Action<NavigationAction.ChangeSidebarVisibility, string> {
  return {
    type: NavigationAction.ChangeSidebarVisibility,
    payload: nextPosition
  };
}

export function closeSidebar() : EmptyAction<NavigationAction.CloseSideBar> {
  return {
    type: NavigationAction.CloseSideBar
  };
}

export function changeActiveSidebarItem(activeItem : string) : Action<NavigationAction.ChangeActiveSideBarItem, string> {
  return {
    type: NavigationAction.ChangeActiveSideBarItem,
    payload: activeItem,
  };
}

export function changeSidebarVisibility(nextVisibility : string) : Action<NavigationAction.ChangeSidebarVisibility, string> {
  return {
    type: NavigationAction.ChangeSidebarVisibility,
    payload: nextVisibility,
  };
}
