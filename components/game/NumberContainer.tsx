import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

type numberContainerProps = {
  children: ReactNode;
};

const NumberContainer: React.FC<numberContainerProps> = (
  props: numberContainerProps,
) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.primary500,
    fontSize: 36,
    fontWeight: 'bold',
    ...Fonts,
  },
});

export default NumberContainer;
