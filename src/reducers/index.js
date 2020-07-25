import { combineReducers } from 'redux';
import auth from './auth';
import alerts from './alerts';
import ethereum from "./ethereum";
import firmware from "./firmware";
import navigation from './navigation';
import register from './register';

export default combineReducers({
  alerts,
  auth,
  ethereum,
  firmware,
  navigation,
  register
});
