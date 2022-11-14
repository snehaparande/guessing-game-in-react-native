import {Platform} from 'react-native';

const Fonts = {
  ...Platform.select({
    ios: {
      fontFamily: 'GillSans-UltraBold',
      // fontFamily: 'Noteworthy',
    },
    android: {
      fontFamily: 'monospace',
    },
  }),
};
export default Fonts;
