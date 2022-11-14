import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';

type GameOverProps = {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
};

const GameOverScreen: React.FC<GameOverProps> = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  const {width, height} = useWindowDimensions();

  let imgSize = 300;

  if (width < 350) {
    imgSize = 100;
  }

  if (height < 500) {
    imgSize = 100;
  }

  const imgStyles = {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imgContainer, imgStyles]}>
          <Image
            style={styles.img}
            source={require('../assets/gameOver.jpeg')}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  img: {
    width: '100%',
    height: '100%',
    opacity: 0.75,
  },
  summaryText: {
    ...Fonts,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    color: Colors.accent300,
  },
  highlight: {
    color: Colors.accent700,
    fontWeight: 'bold',
  },
});

export default GameOverScreen;
