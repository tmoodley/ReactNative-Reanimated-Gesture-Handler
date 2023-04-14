import React from 'react';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

import { LottieAnimation } from '@components';
import { PINCH_ANIMATION } from '@themes/animations';

import { animateComponentStyles } from './PanMode';

const PinchMode = () => {
  const scale = useSharedValue(1);

  const pinchGestureEvent =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: event => {
        scale.value = event.scale;
      },
      onEnd: () => {
        scale.value = withSpring(1);
      },
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={pinchGestureEvent}>
      <Animated.View style={[animatedStyle, animateComponentStyles.container]}>
        <LottieAnimation source={PINCH_ANIMATION} />
      </Animated.View>
    </PinchGestureHandler>
  );
};

export default PinchMode;
