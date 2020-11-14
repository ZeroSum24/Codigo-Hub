import { LoginActionType, LoginAction } from '../actions/user';
import { AuthState, defaultState } from '../model/State';

export default function auth(state : AuthState = defaultState.auth, action : LoginAction) : AuthState {
    switch (action.type) {
        case LoginActionType.Success:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                errorMessage: '',
            };
        case LoginActionType.Failure:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
}
