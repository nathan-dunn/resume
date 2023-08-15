import React from 'react';
import { Divider } from '@chakra-ui/react';
import { theme } from '../config';

const { colors } = theme;

interface SectionDividerProps {
  bg?: string;
  my?: number;
  h?: number;
}

// can be used as a spacer -- don't pass in bg, and give it the my you want
export const SectionDivider = ({ bg = colors.bg2, my = 0.5, h = 1 }: SectionDividerProps) => {
  return (
    <Divider
      orientation="horizontal"
      alignSelf="center"
      w="100%"
      h={h}
      bg={bg}
      color="transparent"
      my={my}
      border="none"
    />
  );
};
