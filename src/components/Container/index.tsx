import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ContainerProps } from './types';

export const Container = React.memo(
  ({
    flex,
    vCenter,
    hCenter,
    vPadding,
    children,
    hPadding,
    containerStyles,
    ...rest
  }: ContainerProps) => {
    return (
      <View
        style={[
          !!flex && { flex },
          !!vPadding && { paddingVertical: vPadding },
          !!hPadding && { paddingHorizontal: hPadding },
          hCenter && styles.alignCenter,
          vCenter && styles.justifyCenter,
          containerStyles,
        ]}
        {...rest}>
        {children}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
});
