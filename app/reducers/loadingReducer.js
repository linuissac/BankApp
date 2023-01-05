/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Loading Reducer - Handles loading state.
 */

 import * as types from '../actions/types';
 import createReducer from '../lib/createReducer';
 
 const initialState = {
   isLoading: false,
 };
 
 export const loadingReducer = createReducer(initialState, {
   [types.ENABLE_LOADER](state) {
     return {...state, isLoading: true};
   },
   [types.DISABLE_LOADER](state) {
     return {...state, isLoading: false};
   },
 });
 