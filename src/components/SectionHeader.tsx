import React from 'react';
import { Text } from '@chakra-ui/react';

interface SectionHeaderProps {
  title: string;
  color?: string;
}

export const SectionHeader = ({ title, color = '#000' }: SectionHeaderProps) => {
  return (
    <Text
      fontSize={14}
      fontWeight="900"
      mb={2}
      color={color}
      fontFamily={`'Montserrat', sans-serif`}
      letterSpacing={1}
    >
      {title}
    </Text>
  );
};
