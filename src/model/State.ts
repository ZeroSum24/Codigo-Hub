import { SearchStatus } from "../actions/search";
import Bounty from "./Bounty";
import Firmware, { FirmwareWithThumbs } from "./Firmware";
import Device from "./Device";
import Profile, { ProfileWithStats } from "./Profile";
import Box from '3box';
import { Space } from '../types/3box-aux';
import { Optional, None } from "../types/optional";

export interface AlertsState {
  readonly alertsList : {
     readonly id : number,
     readonly title : string, 
     readonly value : number, 
     readonly color : string, 
     readonly footer : string 
    }[]
}

export interface AuthState {
  readonly isFetching : boolean,
  readonly isAuthenticated : boolean,
  readonly errorMessage : string
}

export interface EthereumState {
  readonly isFetching : boolean,
  readonly isEthereumEnabled : boolean,
  readonly ethereumAddress : string,
  readonly userBox : Optional<Box>,
  readonly userSpace : Optional<Space>,
  readonly userSpaceName : string,
  readonly errorMessage : string
}

export interface ModelState {
  readonly bountyList : Bounty[],
  readonly firmwareList : Firmware[]
}

export interface NavigationState {
  readonly sidebarOpened : boolean,
  readonly activeItem : string,
  readonly sidebarPosition : string,
  readonly sidebarVisibility : string,
  readonly targetProfileAddress : string
}

export interface ProfileState {
  readonly addDeviceSuccess : boolean,
  readonly deviceList : Device[],
  readonly userProfile : Optional<Profile>,
  readonly userPassword : string
}

export interface RegisterState {
  readonly networkAddress : string,
  readonly isFetching : boolean,
  readonly errorMessage : string,
  readonly linkingDeveloperAccount : boolean,
  readonly registerPending : boolean
}

export interface SearchState {
  readonly searchText : string,
  readonly searchStatus : SearchStatus,
  readonly bountyResults : Bounty[],
  readonly deviceResults : Device[],
  readonly firmwareResults : Firmware[],
  readonly userResults : ProfileWithStats[],
  readonly errorMessage : string
}

export interface ViewsState {
  readonly firmwareStats : Optional<FirmwareWithThumbs>,
  readonly firmwareSource : string,
  readonly mineLike : number,
  readonly firmwareDeveloper : Optional<Profile>,
  readonly bountyDetails : Optional<Bounty>,
  readonly bountyProposer : Optional<ProfileWithStats>,
  readonly profileWithStats : Optional<ProfileWithStats>
}

export interface State {
  readonly alerts : AlertsState,
  readonly auth : AuthState,
  readonly ethereum : EthereumState,
  readonly model : ModelState,
  readonly navigation : NavigationState,
  readonly profile : ProfileState,
  readonly register : RegisterState,
  readonly search : SearchState,
  readonly views : ViewsState
}

const authenticated = localStorage.getItem('authenticated')?.toLowerCase() === "true";

export const defaultState : State = {
  alerts: {
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
    ]
  },
  auth: {
    isFetching: false,
    isAuthenticated: authenticated,
    errorMessage: ''
  },
  ethereum: {
    isFetching: true,
    isEthereumEnabled: false,
    ethereumAddress: '',
    userBox: None,
    userSpace: None,
    userSpaceName: '',
    errorMessage: ''
  },
  model: {
    bountyList: [],
    firmwareList: []
  },
  navigation: {
    sidebarOpened: false,
    activeItem: window.location.pathname,
    sidebarPosition: 'left',
    sidebarVisibility: 'show',
    targetProfileAddress: ''
  },
  profile: {
    addDeviceSuccess : false,
    deviceList : [],
    userProfile : None,
    userPassword : ''
  },
  register: {
    networkAddress: '',
    isFetching: false,
    errorMessage: '',    
    linkingDeveloperAccount : false,
    registerPending : false
  },
  search: {
    searchText: '',
    searchStatus: SearchStatus.Loading,
    bountyResults: [],
    deviceResults: [],
    firmwareResults: [],
    userResults: [],
    errorMessage: ''
  },
  views: {
    firmwareStats : None,
    firmwareSource : '',
    mineLike : 0,
    firmwareDeveloper : None,
    bountyDetails : None,
    bountyProposer : None,
    profileWithStats : None,
  }
}