/**
 * Created by Linu Sherin Issac
 * on Jan 5, 2023
 * Navigation Header - Navigation Header Component
 */

import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from '../../config/Constants';

const Header = ({didTapOnBackButton}) => {
  return (
    <View style={styles.headerContainerStyle}>
      <TouchableOpacity
        onPress={didTapOnBackButton && didTapOnBackButton}
        hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}>
        <Icon
          name={'arrow-back-ios'}
          size={25}
          color={Constants.APP_WHITE_COLOR}
          style={{fontWeight: '600'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.checkboxContainerStyle}
        onPress={didTapOnBackButton && didTapOnBackButton}
        hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}>
        <Text style={styles.checkboxTextStyle}>Remember User ID</Text>
        <Icon
          name={'check-box-outline-blank'}
          size={25}
          color={Constants.APP_WHITE_COLOR}
        />
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
  },
  checkboxContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxTextStyle: {
    color: Constants.APP_WHITE_COLOR,
    fontSize: 15,
    margin: 8,
  },
});
export default Header;
