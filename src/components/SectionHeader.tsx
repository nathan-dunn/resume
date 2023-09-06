import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { theme } from '../config';

const { colors, fonts } = theme;

interface SectionHeaderProps {
  title: string;
  color?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  color = colors.fc1,
}) => {
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

export const SectionHeaderMobile: React.FC<SectionHeaderProps> = ({
  title,
  color = colors.fc1,
}) => {
  return (
    <Box alignSelf="center">
      <Text
        mb={3}
        color={color}
        fontFamily={fonts.ff1}
        fontSize={fonts.fs2}
        fontWeight={700}
        letterSpacing={1}
      >
        {title}
      </Text>
    </Box>
  );
};
