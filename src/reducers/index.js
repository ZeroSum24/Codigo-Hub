import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import register from './register';
import devices from './devices'
import search from './search'

export default combineReducers({
  alerts,
  auth,
  navigation,
  register,
  devices,
  search
});
