import React from 'react';
import { Divider } from '@chakra-ui/react';
import { theme } from '../styles';

interface SectionDividerProps {
  backgroundColor?: string;
  my?: number;
}

export const SectionDivider = ({
  backgroundColor = theme.colors.dGray,
  my = 1,
}: SectionDividerProps) => {
  return (
    <Divider
      orientation="horizontal"
      alignSelf="center"
      h={1}
      w="94%"
      backgroundColor={backgroundColor}
      color="transparent"
      my={my}
      border="none"
    />
  );
};
