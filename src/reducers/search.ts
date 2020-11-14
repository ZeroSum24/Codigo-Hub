import { SearchActionType, SearchStatus, SearchAction } from '../actions/search';
import { SearchState, defaultState } from '../model/State';

export default function search(state : SearchState = defaultState.search, action : SearchAction) : SearchState {
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
