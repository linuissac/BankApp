import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from '../../config/Constants';
import Images from '../../config/Images';

const AccountCard = ({didTapOnButton, footerText, headerText}) => {
  return (
    <View style={styles.cardContainerStyle}>
      <View style={styles.headerConatinerStyle}>
        <Text style={styles.accountTextStyle}>{headerText}</Text>
        <Image
          source={Images.accountsImage}
          style={styles.accountImageStyle}
          resizeMode={'cover'}
        />
      </View>
      <TouchableOpacity
        style={styles.footerConatinerStyle}
        onPress={didTapOnButton && didTapOnButton}>
        <Text style={styles.footerTextStyle}>{footerText}</Text>
        <Icon name="arrow-forward" color={'#000'} size={20} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainerStyle: {
    backgroundColor: Constants.APP_LIGHT_GREY_COLOR,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 22,
    overflow: 'hidden',
    marginVertical: 20,
  },
  headerConatinerStyle: {
    backgroundColor: Constants.APP_LIGHT_GREY_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  footerConatinerStyle: {
    backgroundColor: Constants.APP_WHITE_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  accountImageStyle: {
    width: 160,
    height: 160,
  },
  accountTextStyle: {
    textAlign: 'left',
    fontSize: 20,
    color: Constants.APP_RED_FONT,
    flex: 1,
    fontWeight: '600',
  },
  footerTextStyle: {
    color: Constants.APP_BLACK_COLOR,
    fontSize: 12,
    fontWeight:'600'
  },
});
export default AccountCard;
