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
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Animated,
  Easing,
  bounce,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import Button from '../../components/Button';
import Images from '../../config/Images';
import AccountCard from '../../components/AccountCard';
import Constants from '../../config/Constants';
import Header from '../../components/Header';
import FloatingTextInput from '../../components/FloatingTextInput';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      password: '',
      showPassword: true,
      rememberLogin: false,
      isLoginModeEnabled: false,
      bounceValue: new Animated.Value(300),
      slideDown: new Animated.Value(0),
      isInputFocused: false,
      imageTranslate: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', () => {
      this._upwards();
    });
  }
  _didTapOnBackButton = () => {
    this.setState({
      isLoginModeEnabled: false,
      bounceValue: new Animated.Value(300),
    });
    this._slide();
  };
  _didTapOnLogin = () => {
    this.setState({
      isLoginModeEnabled: true,
      slideDown: new Animated.Value(-300),
    });
    this._bounce();
  };

  _bounce = () => {
    Animated.spring(this.state.bounceValue, {
      toValue: 0,
      duration: 2000,
      friction: 5,
      // tension:1,
      useNativeDriver: true,
    }).start();
  };

  _slide = () => {
    Animated.spring(this.state.slideDown, {
      toValue: 0,
      duration: 2000,
      friction: 7,
      useNativeDriver: true,
    }).start();
  };

  _upwards = () => {
    Animated.spring(this.state.imageTranslate, {
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

  render() {
    const {
      userID,
      password,
      showPassword,
      rememberLogin,
      isLoginModeEnabled,
      isInputFocused,
    } = this.state;
    return (
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.mainContainer}>
            
              <ImageBackground
                source={Images.gif}
                style={styles.backgroundImageStyle}
                resizeMode={'stretch'}>
                {isLoginModeEnabled ? (
                  <>
                    <Header
                      didTapOnBackButton={this._didTapOnBackButton}
                      didTapOnRememberLogin={this._didTapOnRememberLogin}
                      rememberLogin={rememberLogin}
                    />
                    <Animated.View
                      style={[
                        {
                          transform: [
                            {
                              translateY: this.state.bounceValue,
                            },
                          ],
                        },
                      ]}>
                      <View style={styles.viewContainer}>
                        <FloatingTextInput
                          textInputRef={input => {
                            this.userID = input;
                          }}
                          keyboardType={'email-address'}
                          attrName="userId"
                          title="User ID"
                          value={userID}
                          updateMasterState={value => {
                            this.setState({userID: value});
                          }}
                          onSubmitEditing={() => {
                            this.password.focus();
                          }}
                          returnKeyType={'next'}
                          otherTextInputProps={{autoCapitalize: 'none'}}
                          onFocus={() => {
                            this.setState({isInputFocused: true});
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
                            updateMasterState={value => {
                              this.setState({password: value});
                            }}
                            secureTextEntry={showPassword}
                            returnKeyType={'next'}
                            onSubmitEditing={() => {
                              this._didTapOnLogin;
                            }}
                            onFocus={() => {
                              setTimeout(() => {
                                this.scrollRef.scrollToEnd();
                              }, 500);
                            }}
                          />
                          {showPassword ? (
                            <TouchableOpacity
                              onPress={() =>
                                this.setState({showPassword: false})
                              }
                              style={styles.passwordIconContainer}>
                              <Text style={styles.passwordTextStyle}>Show</Text>
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity
                              onPress={() =>
                                this.setState({showPassword: true})
                              }
                              style={styles.passwordIconContainer}>
                              <Text style={styles.passwordTextStyle}>Hide</Text>
                            </TouchableOpacity>
                          )}
                        </View>
                      </View>
                    </Animated.View>
                  </>
                ) : (
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
                )}
              </ImageBackground>
           
            <View style={styles.viewContainer}>
              <Button
                buttonName="Login"
                didTapOnButton={this._didTapOnLogin}
                disabled={isLoginModeEnabled}
                buttonColor={
                  isLoginModeEnabled
                    ? Constants.APP_DIM_GREY_COLOR
                    : Constants.APP_GREY_COLOR
                }
              />
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
      </ScrollView>
    );
  }
}

export default HomeScreen;
