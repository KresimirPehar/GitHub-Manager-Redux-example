import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';

const configureStore = () => {
  return createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
