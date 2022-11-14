import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors';

type CardProps = {
  children: ReactNode;
};

const Card: React.FC<CardProps> = (props: CardProps) => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 4, // for android
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
