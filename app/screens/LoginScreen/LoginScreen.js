/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Login Screen - Login Screen View
 */
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import FloatingTextInput from '../../components/FloatingTextInput';
import Constants from '../../config/Constants';
import Button from '../../components/Button';
import Images from '../../config/Images';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: '',
      password: '',
      showPassword: true,
    };
  }
  didTapOnBackButton = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {userID, password, showPassword} = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ImageBackground
          source={Images.AppBackgroundImage}
          style={{height: '88%', width: '100%'}}>
          <Header didTapOnBackButton={this.didTapOnBackButton} />
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
                this.setState({userID: value});
              }}
              titleActiveColor={Constants.APP_GREY_COLOR}
              titleInactiveColor={Constants.APP_LIGHT_GREY_COLOR}
              containerStyle={{backgroundColor: Constants.APP_WHITE_COLOR}}
              containerStyle1={{
                backgroundColor: Constants.APP_WHITE_COLOR,
              }}
              titleActiveSize={14}
              titleInActiveSize={16}
              onSubmitEditing={() => {
                this.password.focus();
              }}
              returnKeyType={'next'}
              otherTextInputProps={{autoCapitalize: 'none'}}
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
                titleActiveColor={Constants.APP_GREY_COLOR}
                titleInactiveColor={Constants.APP_LIGHT_GREY_COLOR}
                containerStyle={{
                  backgroundColor: Constants.APP_WHITE_COLOR,
                  marginTop: 20,
                }}
                containerStyle1={{
                  backgroundColor: Constants.APP_WHITE_COLOR,
                }}
                titleActiveSize={14}
                titleInActiveSize={16}
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
          </View>
        </ImageBackground>
        <View style={styles.loginButtonContainer}>
          <Button buttonName="Login" didTapOnButton={this._didTapOnLogin} />
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
