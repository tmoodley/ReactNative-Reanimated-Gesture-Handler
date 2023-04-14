import React from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native/types';

export type ContainerProps = {
  flex?: number;
  hPadding?: number;
  hCenter?: boolean;
  vCenter?: boolean;
  vPadding?: number;
  children: React.ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
} & ViewProps;
