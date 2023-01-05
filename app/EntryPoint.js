/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Entrypoint - Everthing starts from the entrypoint.
 */

import Navigator from './navigation';
import {Provider} from 'react-redux';
import React, {Component} from 'react';

import configureStore from './store/configureStore';
import {PersistGate} from 'redux-persist/es/integration/react';
import {ActivityIndicator} from 'react-native';

const {persistor, store} = configureStore();

export default class Entrypoint extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}
