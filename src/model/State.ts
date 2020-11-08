import { SearchStatus } from "../actions/search";
import Bounty from "./Bounty";
import Firmware, { FirmwareWithThumbs } from "./Firmware";
import Device from "./Device";
import Profile, { ProfileWithStats } from "./Profile";
import Box from '3box';
import { Space } from '../types/3box-aux';
import { Optional, None } from "../types/optional";

export interface State {
    // Used by: alerts.ts
    readonly alertsList : { readonly id : number, readonly title : string, readonly value : number, readonly color : string, readonly footer : string }[],
    // Used by: auth.ts, ethereum.ts, register.ts
    readonly isFetching : boolean,
    // Used by: auth.ts
    readonly isAuthenticated : boolean,
    // Used by: ethereum.ts
    readonly isEthereumEnabled : boolean,
    // Used by: ethereum.ts
    readonly ethereumAddress : string,
    // Used by: ethereum.ts
    readonly userBox : Optional<Box>,
    // Used by: ethereum.ts
    readonly userSpace : Optional<Space>,
    // Used by: ethereum.ts
    readonly userSpaceName : string,
    // Used by: ethereum.ts, register.ts, search.ts
    readonly errorMessage : string,
    // Used by: model.ts
    readonly bountyList : Bounty[],
    // Used by: model.ts
    readonly firmwareList : Firmware[],
    // Used by: navigation.ts
    readonly sidebarOpened : boolean,
    // Used by: navigation.ts
    readonly activeItem : string,
    // Used by: navigation.ts
    readonly sidebarPosition : string,
    // Used by: navigation.ts
    readonly sidebarVisibility : string,
    // Used by: navigation.ts
    readonly targetProfileAddress : string,
    // Used by: profile.ts
    readonly addDeviceSuccess : boolean,
    // Used by: profile.ts
    readonly deviceList : Device[],
    // Used by: profile.ts
    readonly userProfile : Optional<Profile>,
    // Used by: profile.ts
    readonly userPassword : string,
    // Used by: register.ts
    readonly networkAddress : string,
    // Used by: register.ts
    readonly linkingDeveloperAccount : boolean,
    // Used by: register.ts
    readonly registerPending : boolean,
    // Used by: search.ts
    readonly searchText : string,
    // Used by: search.ts
    readonly searchStatus : string,
    // Used by: search.ts
    readonly bountyResults : Bounty[],
    // Used by: search.ts
    readonly deviceResults : Device[],
    // Used by: search.ts
    readonly firmwareResults : Firmware[],
    // Used by: search.ts
    readonly userResults : ProfileWithStats[],
    // Used by: views.ts
    readonly firmwareStats : Optional<FirmwareWithThumbs>,
    // Used by: views.ts
    readonly firmwareSource : string,
    // Used by: views.ts
    readonly mineLike : number,
    // Used by: views.ts
    readonly firmwareDeveloper : Optional<Profile>,
    // Used by: views.ts
    readonly bountyDetails : Optional<Bounty>,
    // Used by: views.ts
    readonly bountyProposer : Optional<ProfileWithStats>,
    // Used by: views.ts
    readonly profileWithStats : Optional<ProfileWithStats>,
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
      userBox: None,
      userSpace: None,
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
      userProfile : None,
      userPassword : '',
      networkAddress : '',
      linkingDeveloperAccount : false,
      registerPending : false,
      searchText : '',
      searchStatus : SearchStatus.Loading,
      bountyResults : [],
      deviceResults : [],
      firmwareResults : [],
      userResults : [],
      firmwareStats : None,
      firmwareSource : '',
      mineLike : 0,
      firmwareDeveloper : None,
      bountyDetails : None,
      bountyProposer : None,
      profileWithStats : None,
}