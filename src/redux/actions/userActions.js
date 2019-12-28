import axios from 'axios';
import {
  ADD_USER_ERROR,
  FILTER_USER,
  ADD_USER_BEGIN,
  USER_ADDED
} from './userTypes';

export const addUserBegin = () => ({
  type: ADD_USER_BEGIN
});

export const addUser = user => ({
  type: USER_ADDED,
  user
});

export const addUserError = () => ({
  type: ADD_USER_ERROR
});

export const filterUser = user => ({
  type: FILTER_USER,
  user
});

export const addGitHubUser = userName => dispatch => {
  dispatch(addUserBegin());
  return axios.get(`https://api.github.com/users/${userName}`).then(
    result => {
      const user = {
        avatarUrl: result.data.avatar_url,
        name: result.data.name,
        location: result.data.location
      };
      dispatch(addUser(user));
    },
    () => {
      dispatch(addUserError());
    }
  );
};
