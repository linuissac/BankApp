/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Action -  login actions
 */

import * as types from './types';

export function onNetworkStatusChange(networkStatus) {
  return {
    type: types.APP_NETWORK_STATUS,
    networkStatus,
  };
}
