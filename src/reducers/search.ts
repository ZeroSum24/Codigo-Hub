import { SearchAction, SearchStatus } from '../actions/search';
import { State, defaultState } from '../model/State';

export default function search(state : State = defaultState, action : any) : State {
  switch (action.type) {
    case SearchAction.Start:
      return Object.assign({}, state, {
        searchText: action.payload,
      });
    case SearchAction.Success:
      return Object.assign({}, state, {
        bountyResults: action.payload.bountyResults,
        firmwareResults: action.payload.firmwareResults,
        userResults:  action.payload.userResults,
        deviceResults: action.payload.deviceResults,
        searchStatus: SearchStatus.Completed
      });
    case SearchAction.Failure:
      return Object.assign({}, state, {
        errorMessage: action.payload,
        searchStatus: SearchStatus.Error
      });
    default:
      return state;
  }
}
