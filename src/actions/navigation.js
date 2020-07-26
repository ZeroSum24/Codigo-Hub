/* eslint-disable import/prefer-default-export */

export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const CHANGE_ACTIVE_SIDEBAR_ITEM = 'CHANGE_ACTIVE_SIDEBAR_ITEM';
export const CHANGE_SIDEBAR_POSITION = 'CHANGE_SIDEBAR_POSITION';
export const CHANGE_SIDEBAR_VISIBILITY = 'CHANGE_SIDEBAR_VISIBILITY';
export const SET_PROFILE_TARGET_ADDRESS = 'SET_PROFILE_TARGET_ADDRESS';

export function openSidebar() {
  return {
    type: OPEN_SIDEBAR,
  };
}

export function changeSidebarPosition(nextPosition) {
  return {
    type: CHANGE_SIDEBAR_POSITION,
    payload: nextPosition,
  };
}

export function closeSidebar() {
  return {
    type: CLOSE_SIDEBAR,
  };
}

export function changeActiveSidebarItem(activeItem) {
  return {
    type: CHANGE_ACTIVE_SIDEBAR_ITEM,
    activeItem,
  };
}

export function changeSidebarVisibility(nextVisibility) {
  return {
    type: CHANGE_SIDEBAR_VISIBILITY,
    payload: nextVisibility,
  };
}

export function setProfileTargetAddress(targetAddress) {
  return {
    type: SET_PROFILE_TARGET_ADDRESS,
    payload: targetAddress
  }
}