import React, {ReactNode, useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartgameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

const App: React.FC = () => {
  const [isGameOver, setIsGameOver] = useState<boolean>(true);
  const [userNumber, setUserNumber] = useState<null | number>();
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const pickedNumberHandler = (pickedNumer: number) => {
    setUserNumber(pickedNumer);
    setIsGameOver(false);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setIsGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen: ReactNode = (
    <StartGameScreen onPickNumber={pickedNumberHandler} />
  );

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.accent500, Colors.primary700]}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/background.jpeg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});

export default App;
