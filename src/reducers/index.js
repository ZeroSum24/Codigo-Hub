import { combineReducers } from 'redux';
import auth from './auth';
import alerts from './alerts';
import ethereum from "./ethereum";
import navigation from './navigation';
import register from './register';
import devices from './devices'

export default combineReducers({
  alerts,
  auth,
  ethereum,
  navigation,
  register,
  devices
});
