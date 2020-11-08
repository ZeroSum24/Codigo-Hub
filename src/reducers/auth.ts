import { LoginActionType, LoginAction } from '../actions/user';
import { State, defaultState } from '../model/State';

export default function auth(state : State = defaultState, action : LoginAction) : State {
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
