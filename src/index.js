import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// 1. Here we add Middleware module that help to apply work with actions 
import ReduxPromise from 'redux-promise'; // npm install --save redux-promise


import App from './components/app';
import reducers from './reducers';

// 2. To Apply Middleware we pass recently imported from 'redux-promise' 'ReduxPromise'' as argument
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
