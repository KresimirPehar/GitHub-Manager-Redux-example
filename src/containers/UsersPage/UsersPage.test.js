import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UsersPage from './UsersPage';
import userReducer, {
  initialState as userInitialState
} from '../../redux/reducers/userReducer';

afterEach(cleanup);

const renderWithRedux = (
  component,
  {
    initialState = { users: userInitialState },
    store = createStore(userReducer, initialState)
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

// it('should add user to user list on form submit', async () => {
//   const { getByTestId } = renderWithRedux(
//     <UsersPage users={userInitialState.filteredUser} />
//   );
//   fireEvent.submit(getByTestId('addForm'));
// });

// TODO - waitForElement users list after dispatching addUser action
