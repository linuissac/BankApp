/**
 * Created by Linu Sherin Issac
 * on Jan 07, 2023
 * API main method General api to acces data from web
 */

import ApiConstants from './apiConstants';
import Api from './index';

export function loginAPI(params) {
  return Api(ApiConstants.LOGIN_API, params, 'post');
}
