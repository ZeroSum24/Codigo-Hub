import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import register from './register';
import devices from './devices'

export default combineReducers({
  alerts,
  auth,
  navigation,
  register,
  devices
});
