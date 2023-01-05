/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * Login Screen - Login Screen View
 */
import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import styles from './styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.viewContainer}>
          <Text>LOGIN</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
