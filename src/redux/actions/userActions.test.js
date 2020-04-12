import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { addGitHubUser } from './userActions';
import { ADD_USER_BEGIN, USER_ADDED, ADD_USER_ERROR } from './userTypes';
import mockedUser from '../mocks/addUserMock';

jest.mock('axios');

describe('User actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it('should dispatch 2 actions along with USER_ADDED in case of success', async () => {
    axios.get.mockResolvedValue({ data: mockedUser });
    await store.dispatch(addGitHubUser('test'));
    const receivedActions = store.getActions().map(action => action.type);
    const expectedActions = [ADD_USER_BEGIN, USER_ADDED];
    expect(receivedActions).toHaveLength(2);
    expect(receivedActions).toEqual(expectedActions);
  });

  it('should dispatch 2 actions along with ADD_USER_ERROR in case of failure', async () => {
    axios.get.mockImplementation(() =>
      Promise.reject(new Error('Something bad happened'))
    );
    await store.dispatch(addGitHubUser('test'));
    const receivedActions = store.getActions().map(action => action.type);
    const expectedActions = [ADD_USER_BEGIN, ADD_USER_ERROR];
    expect(receivedActions).toHaveLength(2);
    expect(receivedActions).toEqual(expectedActions);
  });
});
