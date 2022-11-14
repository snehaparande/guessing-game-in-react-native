import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

type GuessLogItemProps = {
  roundNumber: number;
  guess: number;
};

const GuessLogItem: React.FC<GuessLogItemProps> = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Oppenent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    ...Fonts,
  },
});

export default GuessLogItem;
