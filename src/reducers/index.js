import { combineReducers } from 'redux';
import auth from './auth';
import alerts from './alerts';
import dashboard from "./dashboard";
import ethereum from "./ethereum";
import navigation from './navigation';
import register from './register';
import profile from './profile';
import search from './search';
import model from './model';
import views from './views'

export default combineReducers({
  alerts,
  auth,
  dashboard,
  ethereum,
  navigation,
  register,
  profile,
  search,
  model,
  views
});
