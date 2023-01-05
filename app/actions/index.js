/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Action -  index class for actions
 */

import * as loadingActions from './loadingActions';
import * as loginActions from './loginActions';

export const ActionCreators = Object.assign({}, loadingActions, loginActions);
