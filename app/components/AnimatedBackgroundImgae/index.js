import React, {useEffect, useRef} from 'react';
import {Animated, Easing, ImageBackground} from 'react-native';
import Constants from '../../config/Constants';
import Images from '../../config/Images';

class AnimatedBackgroundImage extends Component() {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  render() {
    let AnimetedImage = Animated.createAnimatedComponent(ImageBackground);

    return (
      <AnimetedImage
        resizeMode="stretch"
        style={[
          this.props.backgroundImageStyle,
          {
            transform: [
              {
                translateX: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 120],
                }),
              },
              {
                translateY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 25],
                }),
              },
              {
                scaleX: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 15],
                }),
              },
              {
                scaleY: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 12.5],
                }),
              },
            ],
          },
        ]}
        source={Images.gif}
      />
    );
  }
}
export default AnimatedBackgroundImage;
