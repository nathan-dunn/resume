import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const chakraBlueGray = '#2B3549';
const white = '#FFF';
const almostWhite = '#F0F0F0';
const black = '#000';
const almostBlack = '#333';

const backgroundColor1 = '#BB7563';
const backgroundColor2 = '#3B4358';
const backgroundColor3 = '#D8D8D8';

const fontColor1 = '#000';
const fontColor2 = '#404040';
const fontColor3 = backgroundColor1;

const transparent = 'transparent';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    chakraBlueGray,

    black,
    almostBlack,
    white,
    almostWhite,

    backgroundColor1,
    backgroundColor2,
    backgroundColor3,

    fontColor1,
    fontColor2,
    fontColor3,

    transparent,
  },
  fonts: {
    fontFamily1: `'Montserrat', sans-serif`,
    fontFamily2: `'Nunito', sans-serif`,
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode(almostWhite, chakraBlueGray)(props), // light mode, dark mode
        color: mode(black, almostWhite)(props), // light mode, dark mode
      },
    }),
  },
});
