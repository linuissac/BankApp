/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Reducer index - Combine reducers
 */

 import * as appReducer from './appReducer';
 import * as loadingReducer from './loadingReducer';
 
 export default Object.assign(loadingReducer, appReducer);
 