import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import Constants from '../../config/Constants';

const Button = ({buttonName, didTapOnButton, disabled, buttonColor}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainerStyle, {backgroundColor: buttonColor}]}
      onPress={didTapOnButton && didTapOnButton}
      disabled={disabled}>
      <Text style={styles.buttonTextStyle}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 26,
    alignSelf: 'center',
  },
  buttonTextStyle: {
    fontSize: 22,
    color: Constants.APP_WHITE_COLOR,
    fontWeight: '600',
    letterSpacing: 1,
    paddingVertical: 18,
  },
});
export default Button;
