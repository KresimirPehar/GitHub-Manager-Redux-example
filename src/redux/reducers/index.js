import { combineReducers } from 'redux';
import users from './userReducers';

const rootRecucer = combineReducers({
  users
});

export default rootRecucer;
