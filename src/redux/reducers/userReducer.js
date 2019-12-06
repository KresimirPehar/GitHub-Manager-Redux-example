import {
  FILTER_USER,
  ADD_USER_ERROR,
  USER_ADDED,
  ADD_USER_BEGIN
} from '../actions/userTypes';

export const initialState = {
  user: [
    {
      avatarUrl: 'https://avatars3.githubusercontent.com/u/42438024?v=4',
      name: 'Krešimir Pehar',
      location: 'Split, Croatia'
    }
  ],
  filteredUser: [
    {
      avatarUrl: 'https://avatars3.githubusercontent.com/u/42438024?v=4',
      name: 'Krešimir Pehar',
      location: 'Split, Croatia'
    }
  ],
  loading: false,
  error: false
};

const addUserBegin = state => ({
  ...state,
  loading: true
});

const addUser = (state, action) => ({
  ...state,
  user: [...state.user, action.user],
  filteredUser: [...state.user, action.user],
  loading: false,
  error: false
});

const filterUsers = (state, action) => ({
  ...state,
  filteredUser: state.user.filter(user =>
    user.name.toLowerCase().includes(action.user.toLowerCase())
  )
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_BEGIN:
      return addUserBegin(state);
    case USER_ADDED:
      return addUser(state, action);
    case FILTER_USER:
      return filterUsers(state, action);
    case ADD_USER_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default userReducer;
