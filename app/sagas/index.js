/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Sagas -  Redux saga class init.
 */
import * as types from '../actions/types';
import {loginSaga} from './loginSaga';

import {all, takeLatest} from 'redux-saga/effects';

export default function* watch() {
  yield all([takeLatest(types.REQUEST_LOGIN, loginSaga)]);
}
