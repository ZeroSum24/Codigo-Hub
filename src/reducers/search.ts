import { SearchActionType, SearchStatus, SearchAction } from '../actions/search';
import { State, defaultState } from '../model/State';

export default function search(state : State = defaultState, action : SearchAction) : State {
  switch (action.type) {
    case SearchActionType.Start:
      return {
        ...state,
        searchText: action.payload,
      };
    case SearchActionType.Success:
      return {
        ...state,
        bountyResults: action.payload.bountyResults,
        firmwareResults: action.payload.firmwareResults,
        userResults:  action.payload.userResults,
        deviceResults: action.payload.deviceResults,
        searchStatus: SearchStatus.Completed
      };
    case SearchActionType.Failure:
      return {
        ...state,
        errorMessage: action.payload,
        searchStatus: SearchStatus.Error
      };
    default:
      return state;
  }
}
