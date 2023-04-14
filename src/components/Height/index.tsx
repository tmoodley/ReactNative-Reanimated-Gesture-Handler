import React from 'react';
import { View } from 'react-native';

import { MEDIUM_PADDING_SIZE } from '@themes/layout';

import { HeightProps } from './types';

export const Height = React.memo(
  ({ size = MEDIUM_PADDING_SIZE }: HeightProps) => (
    <View style={{ height: size }} />
  ),
);
