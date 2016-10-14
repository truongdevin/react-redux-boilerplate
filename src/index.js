import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import promise from 'redux-promise';
import reducers from './reducers/index';

const store = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
)
