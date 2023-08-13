import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const chakraGray = '#718096';
const chakraBlueGray = '#2B3549';
const red = 'red';
const white = 'white';
const almostWhite = '#F0F0F0';
const black = 'black';
const dBlue = '#3b4358';
const dOrange = '#bb7563';
const dGray = '#D8D8D8';
const transparent = 'transparent';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    chakraGray,
    chakraBlueGray,
    red,
    white,
    black,
    almostWhite,
    dBlue,
    dOrange,
    dGray,
    transparent,
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
