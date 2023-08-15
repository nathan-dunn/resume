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
      fontSize={14}
      fontWeight={700}
      mb={2}
      color={color}
      fontFamily={fonts.ff1}
      letterSpacing={1}
    >
      {title}
    </Text>
  );
};
