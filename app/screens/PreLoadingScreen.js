/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * PreLoadingScreen - UI starts from this screen (Initial netinfo updating.)
 */

import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Constants from '../config/Constants';
import NetInfo from '@react-native-community/netinfo';
import * as appActions from '../actions/appActions';

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

  componentWillUnmount() {}

  _handleConnectivityChange = state => {
    let networkStatus = state.isConnected;
    this.props.onNetworkStatusChange(networkStatus);
    this._checkAppIntroStatus();
  };

  _checkAppIntroStatus = () => {
    const {isNetworkAvailable} = this.props;
    if (isNetworkAvailable) {
      this.props.navigation.navigate('home');
    }
  };

  render() {
    const {isNetworkAvailable} = this.props;
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: Constants.APP_THEME_COLOR}}>
        <ImageBackground>
          <View style={styles.viewConatiner}>
            {!isNetworkAvailable && (
              <Text style={styles.textStyle}>
                PLEASE CHECK YOUR NETWORK CONNECTIVITY!!
              </Text>
            )}
          </View>
        </ImageBackground>
      </SafeAreaView>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreLoadingScreen);
