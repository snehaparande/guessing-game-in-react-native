import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

type InstructionTextProps = {
  children: ReactNode;
  style?: TextStyle;
};

const InstructionText: React.FC<InstructionTextProps> = (
  props: InstructionTextProps,
) => {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 20,
    ...Fonts,
  },
});

export default InstructionText;
