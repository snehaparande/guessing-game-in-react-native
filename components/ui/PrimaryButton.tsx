import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

type BtnProps = {
  children: ReactNode;
  onPress: () => void;
};

const PrimaryButton: React.FC<BtnProps> = (props: BtnProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={props.onPress}
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }>
        <Text style={styles.butonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  butonText: {
    color: 'white',
    textAlign: 'center',
    ...Fonts,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
