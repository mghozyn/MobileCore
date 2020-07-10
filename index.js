/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Router from './src/routes/Router';
import reducers from './src/actions/reducers';

let middleware;
middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, compose(middleware));

const AppContainer = () => (
  useEffect(() => {}),
  (
    <Provider store={store}>
      <Router />
    </Provider>
  )
);

AppRegistry.registerComponent(appName, () => AppContainer);
