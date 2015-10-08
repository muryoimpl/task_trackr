import 'babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App';
import indexReducer from './reducers/index';

let store = createStore(indexReducer);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('content')
);
