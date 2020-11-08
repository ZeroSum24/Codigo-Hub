import { ViewAction, FirmwareData, BountyData } from '../actions/view';
import { State, defaultState } from '../model/State';
import { Action } from '../model/Action';
import { ProfileWithStats } from '../model/Profile';

export default function views(state : State = defaultState, action : Action<ViewAction, FirmwareData | BountyData | { profileWithStats : ProfileWithStats }>) : State {
  switch (action.type) {
    case ViewAction.FirmwareSet:
      const firmwareData = action.payload as FirmwareData;
      return {
        ...state,
        firmwareStats: firmwareData.firmwareStats,
        firmwareSource: firmwareData.firmwareSource,
        firmwareDeveloper: firmwareData.firmwareDeveloper,
        mineLike: firmwareData.mineLike,
      };
    case ViewAction.ProfileSet:
      return {
        ...state,
        profileWithStats: (action.payload as { profileWithStats : ProfileWithStats }).profileWithStats
      };
    case ViewAction.BountySet:
      const bountyData = action.payload as BountyData;
      return {
        ...state,
        bountyDetails: bountyData.bountyDetails,
        bountyProposer: bountyData.bountyProposer
      };
    default:
      return state;
  }
}