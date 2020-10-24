import {
     LOGIN_SUCCESS, LOGIN_FAILURE
} from '../actions/user';
import { State, defaultState} from '../model/State';

export default function auth(state : State = defaultState, action : any) : State {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: '',
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.payload,
            });
        default:
            return state;
    }
}
