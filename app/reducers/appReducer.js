/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * App Reducer - Handles app's network state.
 */

import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isNetworkAvailable: false,
  deviceIP: '',
  deviceNAME: '',
  deviceMAC: '',
};

export const appReducer = createReducer(initialState, {
  [types.APP_NETWORK_STATUS](state, action) {
    return {
      ...state,
      isNetworkAvailable: action.networkStatus,
    };
  },
  [types.SAVE_DEVICE_IP](state, action) {
    return {
      ...state,
      deviceIP: action.params,
    };
  },
  [types.SAVE_DEVICE_NAME](state, action) {
    return {
      ...state,
      deviceNAME: action.params,
    };
  },
  [types.SAVE_DEVICE_MAC](state, action) {
    return {
      ...state,
      deviceMAC: action.params,
    };
  },
});
