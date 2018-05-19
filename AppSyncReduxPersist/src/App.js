/**
 * @flow
 */

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './configureStore';
import WelcomeScreen from './screens/WelcomeScreen';

const { store, persistor } = configureStore();

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <WelcomeScreen />
        </PersistGate>
      </Provider>
    );
  }
}
