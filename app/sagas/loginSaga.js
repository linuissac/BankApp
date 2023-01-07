/**
 * Created by Linu Sherin Issac
 * on Jan 07, 2023
 * Login Saga - Handles API calls
 */

import {put, call, select} from 'redux-saga/effects';
import {loginAPI} from '../api/apiMethods.js';
import * as loadingActions from '../actions/loadingActions';

export function* loginSaga(actions) {
  const {isNetworkAvailable} = yield select(state => state.appReducer);
  if (!isNetworkAvailable) {
    alert('NO INTERNET');
    return;
  }
  yield put(loadingActions.enableLoader());

  try {
    let response = yield call(loginAPI, actions.params);
    console.log('RESPOSNE', response);
    if (response.status == 'success') {
      alert(response.message);
    }

    yield put(loadingActions.disableLoader());
  } catch (error) {
    yield put(loadingActions.disableLoader({}));
    alert('API FAILED');
  }
}
