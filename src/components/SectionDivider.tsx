import React from 'react';
import { Divider } from '@chakra-ui/react';
import { theme } from '../config';

const { colors } = theme;

interface SectionDividerProps {
  bg?: string;
  my?: number;
  h?: number;
  w?: string;
}

// can be used as a spacer -- don't pass in bg, and give it the my you want
export const SectionDivider = ({
  bg = colors.bg2,
  my = 0.5,
  h = 1,
  w = '100%',
}: SectionDividerProps): JSX.Element => {
  return (
    <Divider
      orientation="horizontal"
      alignSelf="center"
      w={w}
      h={h}
      bg={bg}
      color="transparent"
      my={my}
      border="none"
    />
  );
};
