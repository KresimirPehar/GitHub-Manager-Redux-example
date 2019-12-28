import userReducer, { initialState } from './userReducer';
import {
  ADD_USER_BEGIN,
  USER_ADDED,
  ADD_USER_ERROR,
  FILTER_USER
} from '../actions/userTypes';
import addUserMock from '../mocks/addUserMock';
import filterUserMock from '../mocks/filterUserMock';

describe('User reducer', () => {
  it('should return initial state in case of unhandled action type', () => {
    const action = { type: 'testType' };
    expect(userReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle ADD_USER_BEGIN action', () => {
    const action = { type: ADD_USER_BEGIN };
    const expectedState = {
      ...initialState,
      loading: true
    };
    expect(userReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle USER_ADDED action', () => {
    const action = {
      type: USER_ADDED,
      user: addUserMock
    };
    const expectedState = {
      ...initialState,
      user: [...initialState.user, action.user],
      filteredUser: [...initialState.user, action.user],
      loading: false,
      error: false
    };
    expect(userReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_USER_ERROR action', () => {
    const action = { type: ADD_USER_ERROR };
    const expectedState = {
      ...initialState,
      loading: false,
      error: true
    };
    expect(userReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle FILTER_USER action', () => {
    const action = {
      type: FILTER_USER,
      user: filterUserMock
    };
    const expectedState = {
      ...initialState,
      filteredUser: initialState.user.filter(user =>
        user.name.toLowerCase().includes(action.user.toLowerCase())
      )
    };
    expect(userReducer(undefined, action)).toEqual(expectedState);
  });
});
