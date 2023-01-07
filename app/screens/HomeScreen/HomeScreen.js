/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Login Screen - Login Screen View
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Geolocation from '@react-native-community/geolocation';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

import styles from './styles';
import Button from '../../components/Button';
import Images from '../../config/Images';
import AccountCard from '../../components/AccountCard';
import Constants from '../../config/Constants';
import Header from '../../components/Header';
import FloatingTextInput from '../../components/FloatingTextInput';
import HudView from '../../components/HudView';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      password: '',
      showPassword: true,
      rememberLogin: false,
      isLoginModeEnabled: false,
      bounceValue: new Animated.Value(200),
      slideDown: new Animated.Value(0),
      scaleImage: new Animated.Value(1),
      isInputFocused: false,
      latitude: 0,
      longitude: 0,
      imei: '',
    };
  }
  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', () => {
      this.setState({isInputFocused: true});
    });
    Keyboard.addListener('keyboardDidHide', () => {
      this.setState({isInputFocused: false});
    });
    this._didTapOnCurrentLocation();
    this.getIMEI();
  }

  getIMEI = async () => {
    try {
      const granted = await request(PERMISSIONS.ANDROID.READ_PHONE_STATE, {
        title: 'RAKBANK wants to READ_PHONE_STATE',
        message: 'RAKBANKApp needs access to your personal data. ',
      });
      if (granted === RESULTS.GRANTED) {
        const IMEI = require('react-native-imei');
        IMEI.getImei().then(imeiList => {
          this.setState({imei: imeiList});
          console.log('IMEEEEIIIII', imeiList);
        });
        alert('Permission Granted.');
      } else {
        console.log('Permission Not Granted');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  _didTapOnBackButton = () => {
    this.setState({
      isLoginModeEnabled: false,
    });
    this._slide();
  };

  _didTapOnCurrentLocation = () => {
    if (Platform.OS === 'android') {
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        .then(result => {
          switch (result) {
            case 'unavailable':
              console.log(
                'This feature is not available (on this device / in this context)',
              );
              break;
            case 'denied':
              request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
                console.log('RESULT OF ACCESS LOCATION', result);
              });

              break;
            case 'granted':
              Geolocation.getCurrentPosition(
                info => {
                  const {coords} = info;
                  this.setState({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                  });
                },
                error => console.log(error),
                {
                  enableHighAccuracy: false,
                  timeout: 2000,
                  maximumAge: 3600000,
                },
              );
              break;
            case 'blocked':
              Alert(
                'Please give permission access your location.',
                'Open settings',
                'Cancel',
                () => {
                  Linking.openSettings().catch(() =>
                    console.warn('cannot open settings'),
                  );
                },
              );
              break;
          }
        })
        .catch(error => {
          console.log('error', error);
        });
    } else {
      check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log(
                'This feature is not available (on this device / in this context)',
              );
              break;
            case RESULTS.DENIED:
              request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
                console.log('RESULT OF ACCESS LOCATION', result);
              });

              break;
            case RESULTS.GRANTED:
              Geolocation.getCurrentPosition(
                info => {
                  const {coords} = info;
                  this.setState({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                  });
                  check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
                    console.log('LOCATION RES', result);
                  });
                },
                error => console.log(error),
                {
                  enableHighAccuracy: false,
                  timeout: 2000,
                  maximumAge: 3600000,
                },
              );
              break;
            case RESULTS.BLOCKED:
              Alert(
                'Please give permission access your location.',
                'Open settings',
                'Cancel',
                () => {
                  Linking.openSettings().catch(() =>
                    console.warn('cannot open settings'),
                  );
                },
              );
              break;
          }
        })
        .catch(error => {
          // …
        });
    }
  };

  _didTapOnEnableLoginForm = () => {
    this.setState({
      isLoginModeEnabled: true,
      slideDown: new Animated.Value(-300),
    });
  };

  _slide = () => {
    Animated.spring(this.state.slideDown, {
      toValue: 0,
      duration: 2000,
      friction: 7,
      useNativeDriver: true,
    }).start();
  };

  _didTapOnBiometric = () => {
    alert('SUCCESS!');
  };

  _didTapOnRememberLogin = () => {
    this.setState({rememberLogin: !this.state.rememberLogin});
  };

  _didTapOnRequestLogin = () => {
    const {userID, password, latitude, longitude, imei} = this.state;
    const {deviceIP, deviceNAME, deviceMAC} = this.props;

    let params = {
      user_id: userID,
      password: password,
      operating_system: Platform.OS,
      device_name: deviceNAME,
      device_MAC_address: deviceMAC,
      ip_address: deviceIP,
      imei: imei,
      gps: {latitude, longitude},
    };
    this.props.onRequestLogin(params);
  };

  _renderLoginForm = () => {
    const {
      userID,
      password,
      showPassword,
      rememberLogin,
      isInputFocused,
      isLoginModeEnabled,
    } = this.state;

    return (
      <View style={{marginTop: isInputFocused ? 40 : 0}}>
        <Header
          didTapOnBackButton={this._didTapOnBackButton}
          didTapOnRememberLogin={this._didTapOnRememberLogin}
          rememberLogin={rememberLogin}
        />

        <View style={styles.viewContainer}>
          <FloatingTextInput
            textInputRef={input => {
              this.userID = input;
            }}
            keyboardType={'email-address'}
            attrName="userId"
            title="User ID"
            value={userID}
            updateMasterState={(attrName, value) => {
              console.log('value', value);
              this.setState({userID: value});
            }}
            onSubmitEditing={() => {
              this.password.focus();
            }}
            returnKeyType={'next'}
            otherTextInputProps={{autoCapitalize: 'none'}}
            onFocus={() => {
              this.setState({isInputFocused: true});
              setTimeout(() => {
                this.scroll.scrollTo({
                  y: 120,
                  animated: true,
                });
              }, 1);
            }}
          />
          <View style={styles.textInputContainerStyle}>
            <FloatingTextInput
              textInputRef={input => {
                this.password = input;
              }}
              attrName="password"
              title="Password"
              value={password}
              updateMasterState={(attrName, value) => {
                this.setState({password: value});
              }}
              secureTextEntry={showPassword}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                this._didTapOnEnableLoginForm;
              }}
              onFocus={() => {}}
            />
            {showPassword ? (
              <TouchableOpacity
                onPress={() => this.setState({showPassword: false})}
                style={styles.passwordIconContainer}>
                <Text style={styles.passwordTextStyle}>Show</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.setState({showPassword: true})}
                style={styles.passwordIconContainer}>
                <Text style={styles.passwordTextStyle}>Hide</Text>
              </TouchableOpacity>
            )}
          </View>
          {isInputFocused && this._renderButton()}
        </View>
      </View>
    );
  };
  _renderButton = () => {
    const {isLoginModeEnabled} = this.state;
    let isDisabled = this.state.userID !== '' && this.state.password !== '';
    return (
      <Button
        buttonName="Login"
        didTapOnButton={
          isLoginModeEnabled
            ? this._didTapOnRequestLogin
            : this._didTapOnEnableLoginForm
        }
        disabled={isLoginModeEnabled && !isDisabled}
        buttonColor={
          isLoginModeEnabled && !isDisabled
            ? Constants.APP_DIM_GREY_COLOR
            : Constants.APP_GREY_COLOR
        }
      />
    );
  };

  _renderOnBoardingForm = () => {
    return (
      <Animated.View
        style={[
          {
            transform: [
              {
                translateY: this.state.slideDown,
              },
            ],
          },
        ]}>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <View style={styles.logoContainerStyle}>
            <Image
              source={Images.AppOnboardingLogo}
              style={styles.logoImageStyle}
              resizeMode={'contain'}
            />
            <Text style={styles.logoTextStyle}>| RAK</Text>
            <Text style={styles.logoSubTextStyle}>islamic</Text>
          </View>

          <AccountCard
            footerText={'Apply Now'}
            didTapOnButton={() => alert('Success')}
            headerText={'Get a new account in minutes'}
          />
        </View>
      </Animated.View>
    );
  };

  render() {
    const {isLoginModeEnabled, isInputFocused} = this.state;
    const {isLoading} = this.props;
    let isDisabled = this.state.userID !== '' && this.state.password !== '';

    return (
      <>
        <KeyboardAwareScrollView
          innerRef={ref => {
            this.scroll = ref;
          }}
          enableOnAndroid={true}
          scrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          scrollToOverflowEnabled={true}
          enableAutomaticScroll={true}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.mainContainer}>
              <ImageBackground
                source={Images.gif}
                style={styles.backgroundImageStyle}
                resizeMode={'stretch'}>
                {isLoginModeEnabled
                  ? this._renderLoginForm()
                  : this._renderOnBoardingForm()}
              </ImageBackground>

              <View style={styles.viewContainer}>
                {!isInputFocused && this._renderButton()}

                {!isLoginModeEnabled && (
                  <TouchableOpacity
                    style={styles.biometricContainerStyle}
                    onPress={this._didTapOnBiometric}>
                    <Icon
                      name={'fingerprint'}
                      size={22}
                      color={Constants.APP_GREY_COLOR}
                    />
                    <Text style={styles.biometricTextStyle}>
                      Setup Biometric Login
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
        {isLoading && <HudView />}
      </>
    );
  }
}

export default HomeScreen;
