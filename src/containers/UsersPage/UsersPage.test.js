import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { initialState as userInitialState } from '../../redux/reducers/userReducer';
import UsersPage from './UsersPage';
import mockedUser from '../../redux/mocks/addUserMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

const renderWithRedux = (
  component,
  {
    initialState = { users: userInitialState },
    store = mockStore(initialState)
  } = {}
) => render(<Provider store={store}>{component}</Provider>);

it('renders correctly', () => {
  const { queryByText } = renderWithRedux(
    <UsersPage users={userInitialState.filteredUser} />
  );
  expect(queryByText(/add/i)).toBeInTheDocument();
});

it('should set userName on input change', () => {
  const { getByTestId } = renderWithRedux(
    <UsersPage users={userInitialState.filteredUser} />
  );
  const input = getByTestId('userNameInput');
  fireEvent.change(input, {
    target: { value: 'testInput' }
  });
  expect(input.value).toEqual('testInput');
});

it('should dispatch add user action on button click', async () => {
  axios.get.mockResolvedValue({ data: mockedUser });
  const { getByRole, getByPlaceholderText } = renderWithRedux(
    <UsersPage users={userInitialState.filteredUser} />
  );
  const input = getByPlaceholderText(/username/i);
  fireEvent.change(input, {
    target: { value: mockedUser.name }
  });
  fireEvent.click(getByRole('button', { name: /add/i }));
  expect(axios.get).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalledWith(
    `https://api.github.com/users/${mockedUser.name}`
  );
});
