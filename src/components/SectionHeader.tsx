import React from 'react';
import { Text } from '@chakra-ui/react';
import { theme } from '../config';

const { colors, fonts } = theme;

interface SectionHeaderProps {
  title: string;
  color?: string;
}

export const SectionHeader = ({ title, color = colors.fc1 }: SectionHeaderProps) => {
  return (
    <Text
      mb={2}
      color={color}
      fontFamily={fonts.ff1}
      fontSize={fonts.fs2}
      fontWeight={700}
      letterSpacing={1}
    >
      {title}
    </Text>
  );
};
