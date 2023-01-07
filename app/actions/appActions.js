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
export function onRequestLogin(params) {
  return {
    type: types.REQUEST_LOGIN,
    params,
  };
}
export function saveDeviceIp(params) {
  return {
    type: types.SAVE_DEVICE_IP,
    params,
  };
}
export function saveDeviceName(params) {
  return {
    type: types.SAVE_DEVICE_NAME,
    params,
  };
}
export function saveDeviceMac(params) {
  return {
    type: types.SAVE_DEVICE_MAC,
    params,
  };
}
