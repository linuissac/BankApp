/**
 * Created by Linu Sherin Issac
 * on Jan 5, 2023
 * Navigation Header - Navigation Header Component
 */

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from '../../config/Constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';

let statusBarHeight = getStatusBarHeight();

const Header = ({didTapOnBackButton, didTapOnRememberLogin, rememberLogin}) => {
  return (
    <View style={styles.headerContainerStyle}>
      <TouchableOpacity
        onPress={didTapOnBackButton && didTapOnBackButton}
        hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}>
        <Icon
          name={'arrow-back-ios'}
          size={22}
          color={Constants.APP_WHITE_COLOR}
          style={{fontWeight: '600'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.checkboxContainerStyle}
        onPress={didTapOnRememberLogin && didTapOnRememberLogin}
        hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}>
        <Text style={styles.checkboxTextStyle}>Remember User ID</Text>
        {rememberLogin ? (
          <Icon
            name={'check-box'}
            size={25}
            color={Constants.APP_WHITE_COLOR}
          />
        ) : (
          <Icon
            name={'check-box-outline-blank'}
            size={25}
            color={Constants.APP_WHITE_COLOR}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainerStyle: {
    height: 44,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    marginTop: statusBarHeight,

  },
  checkboxContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxTextStyle: {
    color: Constants.APP_WHITE_COLOR,
    fontSize: 12,
    margin: 8,
  },
});
export default Header;
