import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

import { SOCCER_BALL } from '@themes/animations';

import { LottieAnimationProps } from './types';

export const LottieAnimation = ({ source }: LottieAnimationProps) => {
  return (
    <AnimatedLottieView
      loop={false}
      autoPlay={true}
      source={source || SOCCER_BALL}
    />
  );
};
