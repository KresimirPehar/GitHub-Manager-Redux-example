import { combineReducers } from 'redux';
import users from './userReducer';

const rootRecucer = combineReducers({
  users
});

export default rootRecucer;
