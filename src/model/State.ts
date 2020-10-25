import { SearchStatus } from "../actions/search";
import Bounty from "./Bounty";
import Firmware, { FirmwareWithThumbs } from "./Firmware";
import Device from "./Device";
import Profile, { ProfileWithStats } from "./Profile";
import Box from '3box';
import  { Space } from '../types/3box-aux';

export interface State {
    // Used by: alerts.ts
    alertsList : { id : number, title : string, value : number, color : string, footer : string }[],
    // Used by: auth.ts, ethereum.ts, register.ts
    isFetching : boolean,
    // Used by: auth.ts
    isAuthenticated : boolean,
    // Used by: ethereum.ts
    isEthereumEnabled : boolean,
    // Used by: ethereum.ts
    ethereumAddress : string,
    // Used by: ethereum.ts
    userBox : Box | null,
    // Used by: ethereum.ts
    userSpace : Space | null,
    // Used by: ethereum.ts
    userSpaceName : string,
    // Used by: ethereum.ts, register.ts, search.ts
    errorMessage : string,
    // Used by: model.ts
    bountyList : Bounty[],
    // Used by: model.ts
    firmwareList : Firmware[],
    // Used by: navigation.ts
    sidebarOpened : boolean,
    // Used by: navigation.ts
    activeItem : string,
    // Used by: navigation.ts
    sidebarPosition : string,
    // Used by: navigation.ts
    sidebarVisibility : string,
    // Used by: navigation.ts
    targetProfileAddress : string,
    // Used by: profile.ts
    addDeviceSuccess : boolean,
    // Used by: profile.ts
    deviceList : Device[],
    // Used by: profile.ts
    userProfile : Profile | null,
    // Used by: profile.ts
    userPassword : string,
    // Used by: register.ts
    networkAddress : string,
    // Used by: register.ts
    linkingDeveloperAccount : boolean,
    // Used by: register.ts
    registerPending : boolean,
    // Used by: search.ts
    searchText : string,
    // Used by: search.ts
    searchStatus : string,
    // Used by: search.ts
    bountyResults : Bounty[],
    // Used by: search.ts
    deviceResults : Device[],
    // Used by: search.ts
    firmwareResults : Firmware[],
    // Used by: search.ts
    userResults : ProfileWithStats[],
    // Used by: views.ts
    firmwareStats : FirmwareWithThumbs | null,
    // Used by: views.ts
    firmwareSource : string,
    // Used by: views.ts
    mineLike : number,
    // Used by: views.ts
    firmwareDeveloper : Profile | null,
    // Used by: views.ts
    bountyDetails : Bounty | null,
    // Used by: views.ts
    bountyProposer : Firmware | null,
    // Used by: views.ts
    profileWithStats : ProfileWithStats | null,
}

const authenticated = localStorage.getItem('authenticated')?.toLowerCase() === "true";

export const defaultState : State = {
    alertsList: [
        {
          id: 0,
          title: 'Sales Report',
          value: 16,
          color: 'primary',
          footer: 'Calculating x-axis bias... 65%',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 23,
          color: 'danger',
          footer: 'Provide required notes',
        },
      ],
      isFetching: false,
      isAuthenticated: authenticated,
      isEthereumEnabled: false,
      ethereumAddress: '',
      userBox: null,
      userSpace: null,
      userSpaceName: '',
      errorMessage: '',
      bountyList: [],
      firmwareList: [],
      sidebarOpened: false,
      activeItem: window.location.pathname,
      sidebarPosition: 'left',
      sidebarVisibility: 'show',
      targetProfileAddress: '',
      addDeviceSuccess : false,
      deviceList : [],
      userProfile : null,
      userPassword : '',
      networkAddress : '',
      linkingDeveloperAccount : false,
      registerPending : false,
      searchText : '',
      searchStatus : SearchStatus.LOADING,
      bountyResults : [],
      deviceResults : [],
      firmwareResults : [],
      userResults : [],
      firmwareStats : null,
      firmwareSource : '',
      mineLike : 0,
      firmwareDeveloper : null,
      bountyDetails : null,
      bountyProposer : null,
      profileWithStats : null,
}