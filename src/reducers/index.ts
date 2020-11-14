import { combineReducers } from 'redux';
import auth from './auth';
import alerts from './alerts';
import ethereum from "./ethereum";
import navigation from './navigation';
import register from './register';
import profile from './profile';
import search from './search';
import model from './model';
import views from './views'
import { State } from '../model/State';
import { Reducer } from 'react';
import { AlertsAction } from '../actions/alerts';
import { NavigationAction } from '../actions/navigation';
import { LoginAction, EthereumAction } from '../actions/user';
import { ModelAction } from '../actions/model';
import { ProfileAction } from '../actions/profile';
import { RegisterAction } from '../actions/register';
import { SearchAction } from '../actions/search';
import { ViewAction } from '../actions/view';

type AllActions = 
  ( AlertsAction 
  | LoginAction 
  | EthereumAction 
  | ModelAction 
  | NavigationAction 
  | ProfileAction 
  | RegisterAction 
  | SearchAction 
  | ViewAction );

const rootReducer : Reducer<State, AllActions> = combineReducers({
  alerts,
  auth,
  ethereum,
  navigation,
  register,
  profile,
  search,
  model,
  views
});

export default rootReducer;
