import React from 'react';
import Animated, {
  withSpring,
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import { LottieAnimation } from '@components';
import { ANIMATE_COMPONENT_SIZE } from '@themes/layout';

import { ContextType } from '../types';

const PanMode = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
    onStart: (_, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const parallelComponentX = useDerivedValue(() => {
    return withSpring(translateX.value);
  });

  const parallelComponentY = useDerivedValue(() => {
    return withSpring(translateY.value);
  });

  const parallelComponentAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: parallelComponentX.value,
        },
        {
          translateY: parallelComponentY.value,
        },
      ],
    };
  });

  return (
    <>
      <Animated.View style={[parallelComponentAnimatedStyle, animateComponentStyles.container]}>
        <LottieAnimation />
      </Animated.View>

      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[animatedStyle, animateComponentStyles.container]}>
          <LottieAnimation />
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

export default PanMode;

export const animateComponentStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: ANIMATE_COMPONENT_SIZE,
    height: ANIMATE_COMPONENT_SIZE,
  },
});
