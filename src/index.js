import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './redux/configureStore';
import registerServiceWorker from './registerServiceWorker';
import GlobalStyle from './utils/styles/globalStyle';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
