/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Login Screen Styles
 */

import {StyleSheet} from 'react-native';
import Constants from '../../config/Constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Constants.APP_SNOW_WHITE_COLOR,
  },
  viewContainer: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 30,
  },
  textInputContainerStyle: {
    flexDirection: 'row',
  },
  passwordIconContainer: {
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 0,
    top: 0,
  },
  passwordTextStyle: {
    color: Constants.APP_GREY_COLOR,
    fontSize: 12,
  },
  loginButtonContainer: {
    marginBottom:30
  },
});
export default styles;
