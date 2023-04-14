import React from 'react';
import { StyleSheet } from 'react-native';

import { SMALL_PADDING_SIZE } from '@themes/layout';
import { Container, CustomDropDownPicker, Height, SafeAreaHeader } from '@components';

import PanMode from './components/PanMode';
import PinchMode from './components/PinchMode';
import { AnimationModeDropDownItems } from './constants';
import { AnimationModeState, AnimationModes } from './types';

const LandingScreen = () => {

  const [mode, setMode] = React.useState<AnimationModeState>(AnimationModes.PAN);

  const showPanMode = React.useMemo(() => mode === AnimationModes.PAN, [mode]);

  return (
    <SafeAreaHeader>
      <Height size={SMALL_PADDING_SIZE} />

      <CustomDropDownPicker
        value={mode}
        setValue={setMode}
        label={'Select animation mode'}
        items={AnimationModeDropDownItems}
      />

      <Container hCenter vCenter containerStyles={styles.container}>
        {showPanMode ? <PanMode /> : <PinchMode />}
      </Container>
    </SafeAreaHeader>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  dropDownContainer: {
    zIndex: 1,
  },
});
