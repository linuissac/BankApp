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
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import Images from '../../config/Images';
import AccountCard from '../../components/AccountCard';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _didTapOnLogin = () => {
    this.props.navigation.navigate('login');
  };
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'transparent'}
          translucent={true}
        />
        <ImageBackground
          source={Images.AppBackgroundImage}
          style={{height: '88%', width: '100%'}}>
          <View style={styles.logoContainerStyle}>
            <Image
              source={Images.AppOnboardingLogo}
              style={styles.logoImageStyle}
              resizeMode={'contain'}
            />
            <Text style={styles.logoTextStyle}> | RAKislamic</Text>
          </View>
          <AccountCard
            footerText={'Apply Now'}
            didTapOnButton={() => alert('Success')}
            headerText={'Get a new account in minutes'}
          />
        </ImageBackground>
        <View style={styles.viewContainer}>
          <Button buttonName="Login" didTapOnButton={this._didTapOnLogin} />
          <View style={styles.biometricContainerStyle}>
            <Image
              source={Images.biometricImage}
              style={styles.biometricIconStyle}
            />
            <Text style={styles.biometricTextStyle}>Setup Biometric Login</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
