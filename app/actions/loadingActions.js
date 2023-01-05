/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Action -  loading actions
 */

 import * as types from './types';

 export function enableLoader() {
   return {
     type: types.ENABLE_LOADER,
   };
 }
 
 export function disableLoader() {
   return {
     type: types.DISABLE_LOADER,
   };
 }
 