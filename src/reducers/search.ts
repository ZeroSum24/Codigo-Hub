import { SearchAction, SearchStatus, SearchResult } from '../actions/search';
import { State, defaultState } from '../model/State';
import { Action } from '../model/Action';

export default function search(state : State = defaultState, action : Action<SearchAction, string | SearchResult>) : State {
  switch (action.type) {
    case SearchAction.Start:
      return {
        ...state,
        searchText: action.payload as string,
      };
    case SearchAction.Success:
      const searchResult = action.payload as SearchResult;
      return {
        ...state,
        bountyResults: searchResult.bountyResults,
        firmwareResults: searchResult.firmwareResults,
        userResults:  searchResult.userResults,
        deviceResults: searchResult.deviceResults,
        searchStatus: SearchStatus.Completed
      };
    case SearchAction.Failure:
      return {
        ...state,
        errorMessage: action.payload as string,
        searchStatus: SearchStatus.Error
      };
    default:
      return state;
  }
}
