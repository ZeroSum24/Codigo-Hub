import { combineReducers } from 'redux';
import auth from './auth';
import alerts from './alerts';
import ethereum from "./ethereum";
import navigation from './navigation';
import register from './register';
import devices from './devices';
import search from './search';
import model from './model';

export default combineReducers({
  alerts,
  auth,
  ethereum,
  navigation,
  register,
  devices,
  search,
  model
});
