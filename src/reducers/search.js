import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actions/search';

export default function search(state = {
  searchText: '',
  searchCompleted: false,
  bountyResults: [],
  firmwareResults: [],
  userResults: [],
  errorMessage: ''
}, action) {
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
        searchCompleted: true
      });
    case SEARCH_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.payload
      });
    default:
      return state;
  }
}
