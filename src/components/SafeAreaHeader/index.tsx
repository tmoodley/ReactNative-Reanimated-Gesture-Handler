import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SAFE_AREA_HEADER_EDGES } from '@constants/defaultValues';

import { SafeAreaBottomProps } from './types';

export const SafeAreaHeader = React.memo(({
  children,
  backgroundColor
}: SafeAreaBottomProps) => (
  <SafeAreaView
    edges={SAFE_AREA_HEADER_EDGES}
    style={[styles.container, { backgroundColor }]}>
    {children}
  </SafeAreaView>
),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
