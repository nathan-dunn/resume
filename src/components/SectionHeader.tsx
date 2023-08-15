import React from 'react';
import { Text } from '@chakra-ui/react';
import { theme } from '../styles';

interface SectionHeaderProps {
  title: string;
  color?: string;
}

export const SectionHeader = ({ title, color = theme.colors.fontColor1 }: SectionHeaderProps) => {
  return (
    <Text
      fontSize={14}
      fontWeight={700}
      mb={2}
      color={color}
      fontFamily={theme.fonts.fontFamily1}
      letterSpacing={1}
    >
      {title}
    </Text>
  );
};
