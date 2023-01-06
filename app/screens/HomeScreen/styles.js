/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Login Screen Styles
 */

import {StyleSheet} from 'react-native';
import Constants from '../../config/Constants';

const ratio = 375 / 525; //0.7  imageWidth/imageHeight

const minimumHeight = (Constants.SCREEN_HEIGHT * 70) / 100;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Constants.APP_SNOW_WHITE_COLOR,
  },
  viewContainer: {
    // backgroundColor: Constants.APP_SNOW_WHITE_COLOR,
    marginTop: 40,
    marginHorizontal: 30,
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
    alignSelf: 'center',
  },
  logoContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25%',
  },
  logoTextStyle: {
    fontSize: 28,
    color: Constants.APP_WHITE_COLOR,
    textAlign: 'center',
    marginTop: 3,
    fontWeight: '600',
  },
  logoSubTextStyle: {
    fontSize: 25,
    color: Constants.APP_WHITE_COLOR,
    textAlign: 'center',
    marginTop: 4,
  },
  biometricTextStyle: {
    color: Constants.APP_GREY_COLOR,
  },
  backgroundImageStyle: {
    width: Constants.SCREEN_WIDTH,
    height: minimumHeight,
  },
  backgroundImageStyle1: {
    width: Constants.SCREEN_WIDTH,
    height: (Constants.SCREEN_HEIGHT * 50) / 100,
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
});
export default styles;
