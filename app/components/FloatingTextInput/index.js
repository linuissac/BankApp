import React, {Component} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {string, func, object, number} from 'prop-types';
import Constants from '../../config/Constants';

export default class FloatingTextInput extends Component {
  // static propTypes = {
  //   attrName: string.isRequired,
  //   title: string.isRequired,
  //   value: string.isRequired,
  //   updateMasterState: func.isRequired,
  //   keyboardType: string,
  //   titleActiveSize: number, // to control size of title when field is active
  //   titleInActiveSize: number, // to control size of title when field is inactive
  //   titleActiveColor: string, // to control color of title when field is active
  //   titleInactiveColor: string, // to control color of title when field is active
  //   textInputStyles: object,
  //   otherTextInputProps: object,
  //   focus: string.isRequired,
  // };

  static defaultProps = {
    keyboardType: 'default',
    titleActiveSize: 11.5,
    titleInActiveSize: 15,
    titleActiveColor: 'black',
    titleInactiveColor: 'dimgrey',
    textInputStyles: {},
    otherTextInputAttributes: {},
  };

  constructor(props) {
    super(props);
    const {value} = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false,
      scaleValue: new Animated.Value(0),
      bounceValue: new Animated.Value(200),
    };
  }
  componentDidMount() {
    Animated.timing(this.state.scaleValue, {
      toValue: 1,
      duration: 200,
      // easing: Easing.ease,
      useNativeDriver: true,
    }).start();
    Animated.spring(this.state.bounceValue, {
      toValue: 0,
      duration: 2000,
      // friction: 3,
      // tension: 3,
      useNativeDriver: true,
    }).start();
  }
  _handleFocus = () => {
    if (!this.state.isFieldActive) {
      this.setState({isFieldActive: true});
      Animated.timing(this.position, {
        toValue: 1,
        duration: 150,
      }).start();
    }
    this.props.onFocus();
  };

  _handleBlur = () => {
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({isFieldActive: false});
      Animated.timing(this.position, {
        toValue: 0,
        duration: 150,
      }).start();
    }
  };

  _onChangeText = updatedValue => {
    const {attrName, updateMasterState} = this.props;
    updateMasterState(attrName, updatedValue);
  };

  _returnAnimatedTitleStyles = () => {
    const {isFieldActive} = this.state;

    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? 14 : 16,
      color: isFieldActive
        ? Constants.APP_GREY_COLOR
        : Constants.APP_LIGHT_GREY_COLOR,
    };
  };

  render() {
    const {isFieldActive} = this.state;
    return (
      <Animated.View
        style={[
          Styles.container,
          {
            transform: [
              {
                translateY: this.state.bounceValue,
              },
              {
                scaleX: this.state.scaleValue.interpolate({
                  inputRange: [0, 0.8],
                  outputRange: [0.8, 1],
                }),
              },

              {
                scaleY: this.state.scaleValue.interpolate({
                  inputRange: [0, 0.8],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={Styles.container}
          onPress={() => {
            this.textInputRef.focus();
          }}>
          <Animated.Text
            style={[
              Styles.titleStyles,
              {marginTop: isFieldActive ? 2 : 3},
              this._returnAnimatedTitleStyles(),
              this.props.titleTextStyle,
            ]}>
            {this.props.title}
          </Animated.Text>
          <TextInput
            ref={ref => {
              this.textInputRef = ref;
              this.props.textInputRef ? this.props.textInputRef(ref) : null;
            }}
            value={this.props.value}
            style={[
              Styles.textInput,
              {
                borderBottomColor: isFieldActive
                  ? Constants.APP_YELLOW_BORDER
                  : Constants.APP_LIGHT_GREY_COLOR,
              },
            ]}
            onFocus={this._handleFocus}
            onBlur={this._handleBlur}
            onChangeText={this._onChangeText}
            onSubmitEditing={() =>
              this.props.onSubmitEditing && this.props.onSubmitEditing()
            }
            keyboardType={this.props.keyboardType}
            returnKeyType={this.props.returnKeyType}
            secureTextEntry={this.props.secureTextEntry}
            multiline={this.props.multiline}
            autoFocus={this.props.autoFocus}
            numberOfLines={this.props.numberOfLines}
            maxLength={this.props.maxLength}
            {...this.props.otherTextInputProps}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: Constants.APP_WHITE_COLOR,
    alignSelf: 'center',
    marginBottom: 20,
  },
  textInput: {
    marginTop: 25,
    color: Constants.APP_BLACK_COLOR,
    marginHorizontal: 10,
    fontSize: 16,
    height: 40,

    borderBottomWidth: 1,
  },
  titleStyles: {
    position: 'absolute',
    fontSize: 16,
    color: Constants.APP_WHITE_COLOR,
    marginHorizontal: 10,
    marginTop: 0,
  },
});
