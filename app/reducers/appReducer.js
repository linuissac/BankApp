/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * App Reducer - Handles app's network state.
 */

import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isNetworkAvailable: false,
};

export const appReducer = createReducer(initialState, {
  [types.APP_NETWORK_STATUS](state, action) {
    return {
      ...state,
      isNetworkAvailable: action.networkStatus,
    };
  },
});
