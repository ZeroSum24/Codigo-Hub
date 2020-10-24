import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE, SearchStatus } from '../actions/search';
import { State, defaultState } from '../model/State';

export default function search(state : State = defaultState, action : any) : State {
  switch (action.type) {
    case SEARCH_START:
      return Object.assign({}, state, {
        searchText: action.payload,
      });
    case SEARCH_SUCCESS:
      return Object.assign({}, state, {
        bountyResults: action.payload.bountyResults,
        firmwareResults: action.payload.firmwareResults,
        userResults:  action.payload.userResults,
        deviceResults: action.payload.deviceResults,
        searchStatus: SearchStatus.COMPLETED
      });
    case SEARCH_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.payload,
        searchStatus: SearchStatus.ERROR
      });
    default:
      return state;
  }
}
