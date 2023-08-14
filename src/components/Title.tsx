import React from 'react';
import { Text, VStack, HStack } from '@chakra-ui/react';
import data from '../data';
import { theme } from '../styles';

const { name, title } = data.profile;

export const Title = () => {
  return (
    <VStack
      h="160px"
      minH="160px"
      w="100%"
      justify="flex-end"
      align="flex-start"
      spacing={1}
      // border="1px solid darkblue"
    >
      <Text
        color={theme.colors.dOrange}
        fontSize={32}
        fontFamily={theme.fonts.primaryFontFamily}
        fontWeight={700}
        letterSpacing="2px"
        lineHeight="1.0em"
      >
        {name}
      </Text>

      <Text color={theme.colors.dOrange} fontSize={16}>
        {title}
      </Text>
    </VStack>
  );
};

export const TitleMobile = () => {
  return (
    <VStack
      h="100px"
      minH="100px"
      w="100%"
      justify="center"
      align="center"
      spacing={1}
      // border="1px solid darkblue"
    >
      <Text
        color={theme.colors.dOrange}
        fontSize={24}
        fontFamily={theme.fonts.primaryFontFamily}
        fontWeight={700}
        letterSpacing="2px"
        lineHeight="1.0em"
      >
        {name}
      </Text>

      <Text color={theme.colors.dOrange} fontSize={14}>
        {title}
      </Text>
    </VStack>
  );
};
