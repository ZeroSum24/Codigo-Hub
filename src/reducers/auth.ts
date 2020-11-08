import { LoginAction } from '../actions/user';
import { State, defaultState } from '../model/State';
import { Action } from '../model/Action';

export default function auth(state : State = defaultState, action : Action<LoginAction, string>) : State {
    switch (action.type) {
        case LoginAction.Success:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: '',
            });
        case LoginAction.Failure:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.payload,
            });
        default:
            return state;
    }
}
