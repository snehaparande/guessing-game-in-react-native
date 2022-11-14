import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

type TitleProps = {
  children: ReactNode;
};

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    ...Fonts,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary800,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.primary800,
    padding: 12,
    maxWidth: '80%',
  },
});

export default Title;
