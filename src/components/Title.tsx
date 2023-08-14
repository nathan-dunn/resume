import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import data from '../data';
import { theme } from '../styles';

const { name, title } = data.profile;

export const Title = () => {
  return (
    <VStack
      h="160px"
      w="100%"
      color={theme.colors.dOrange}
      justify="flex-end"
      align="flex-start"
      px={4}
      spacing={1}
      // border="1px solid blue"
    >
      <Text
        fontFamily={theme.fonts.primaryFontFamily}
        fontSize={32}
        fontWeight={700}
        letterSpacing="2px"
        lineHeight="1.0em"
      >
        {name}
      </Text>

      <Text fontSize={16}>{title}</Text>
    </VStack>
  );
};
