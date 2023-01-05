/**
 * Created by Linu Sherin Issac
 * on Jan 5, 2023
 * Navigation Index - Root navigation index class
 */

import React, {Component} from 'react';
import NavigationStack from './NavigationStack';
import NavigationService from './NavigationService';

class AppNavigator extends Component {
  render() {
    return (
      <NavigationStack
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default AppNavigator;
