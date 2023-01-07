/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * PreLoadingScreen - UI starts from this screen (Initial netinfo updating.)
 */

import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Constants from '../config/Constants';
import NetInfo from '@react-native-community/netinfo';
import DeviceInfo from 'react-native-device-info';

import * as appActions from '../actions/appActions';

import Images from '../config/Images';

class PreLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener(state => {
      this._handleConnectivityChange(state);
    });
  }

  _handleConnectivityChange = state => {
    let networkStatus = state.isConnected;
    this.props.onNetworkStatusChange(networkStatus);
    this._checkAppIntroStatus();
  };

  _checkAppIntroStatus = () => {
    const {isNetworkAvailable} = this.props;

    if (isNetworkAvailable) {
      DeviceInfo.getIpAddress().then(ip => {
        this.props.saveDeviceIp(ip);
      });
      DeviceInfo.getDeviceName().then(deviceName => {
        this.props.saveDeviceName(deviceName);
      });
      DeviceInfo.getMacAddress().then(mac => {
        this.props.saveDeviceMac(mac);
      });
      setTimeout(() => {
        this.props.navigation.navigate('home');
      }, 2000);
    }
  };

  render() {
    const {isNetworkAvailable} = this.props;
    return (
      <View style={styles.viewConatiner}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={Images.AppBackgroundImage}
          style={styles.backgroundImageStyle}>
          {!isNetworkAvailable ? (
            <Text style={styles.textStyle}>
              PLEASE CHECK YOUR NETWORK CONNECTIVITY!!
            </Text>
          ) : (
            <Image source={Images.AppOnboardingLogo} />
          )}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewConatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Constants.APP_SNOW_WHITE_COLOR,
    fontSize: 20,
    textAlign: 'center',
  },
  backgroundImageStyle: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    isNetworkAvailable: state.appReducer.isNetworkAvailable,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNetworkStatusChange: networkStatus => {
      dispatch(appActions.onNetworkStatusChange(networkStatus));
    },
    saveDeviceIp: params => {
      dispatch(appActions.saveDeviceIp(params));
    },
    saveDeviceName: params => {
      dispatch(appActions.saveDeviceName(params));
    },
    saveDeviceMac: params => {
      dispatch(appActions.saveDeviceMac(params));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreLoadingScreen);
