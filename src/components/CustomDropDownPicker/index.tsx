import React from 'react';
import { StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Container, Height } from '@components';
import { MEDIUM_PADDING_SIZE, SMALL_PADDING_SIZE } from '@themes/layout';

import { CustomDropDownPickerProps } from './types';

export const CustomDropDownPicker = ({
  label,
  value,
  items,
  setValue,
}: CustomDropDownPickerProps) => {

  const [open, setOpen] = React.useState(false);

  return (
    <Container
      hPadding={MEDIUM_PADDING_SIZE}
      containerStyles={styles.container}>
      {!!label && <Text>{label}</Text>}

      <Height size={SMALL_PADDING_SIZE} />

      <DropDownPicker
        open={open}
        items={items}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
});
