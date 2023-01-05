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
    flex:1,
    // backgroundColor:'green',
  
  },
  biometricContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  biometricIconStyle: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  logoImageStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  logoContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTextStyle: {
    fontSize: 25,
    color: Constants.APP_WHITE_COLOR,
    textAlign: 'center',
    marginTop: 3,
    fontWeight: '600',
  },
  biometricTextStyle: {
    color: Constants.APP_GREY_COLOR,
  },
});
export default styles;
