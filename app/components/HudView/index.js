/**
 * Created by Linu Sherin Issac
 * on Jan 07, 2023
 * HudView - App loading screen.
 */

import React, {Component} from 'react';
import Constants from '../../config/Constants';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default class HudView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Constants.APP_THEME_COLOR} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loaderContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255,255,255,1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
