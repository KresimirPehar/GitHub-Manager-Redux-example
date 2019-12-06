/**
 * @jest-environment node
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { addGitHubUser } from './userActions';
import { ADD_USER_BEGIN, USER_ADDED, ADD_USER_ERROR } from './userTypes';

describe('User actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let receivedActions;
  let store;
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });
  afterEach(() => moxios.uninstall());

  it('should dispatch 2 actions along with USER_ADDED in case of success', async () => {
    const expectedActions = [ADD_USER_BEGIN, USER_ADDED];
    moxios.stubRequest('https://api.github.com/users/kresimirpehar', {
      status: 200,
      response: {}
    });
    await store.dispatch(addGitHubUser('kresimirpehar'));
    receivedActions = store.getActions().map(action => action.type);
    expect(receivedActions).toHaveLength(2);
    expect(receivedActions).toEqual(expectedActions);
  });

  it('should dispatch 2 actions along with ADD_USER_ERROR in case of failure', async () => {
    const expectedActions = [ADD_USER_BEGIN, ADD_USER_ERROR];
    moxios.stubRequest('https://api.github.com/users/kresimirpehar', {
      status: 400,
      response: {}
    });
    await store.dispatch(addGitHubUser('kresimirpehar'));
    receivedActions = store.getActions().map(action => action.type);
    expect(receivedActions).toHaveLength(2);
    expect(receivedActions).toEqual(expectedActions);
  });
});
