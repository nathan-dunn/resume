import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { theme, data } from '../config';

const { colors, fonts } = theme;

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
        color={colors.fc2}
        fontSize={32}
        fontFamily={fonts.ff1}
        fontWeight={600}
        letterSpacing="2px"
        lineHeight="1.0em"
      >
        {data.profile.name}
      </Text>

      <Text color={colors.fc2} fontSize={16}>
        {data.profile.title}
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
        color={colors.fc2}
        fontSize={24}
        fontFamily={fonts.ff1}
        fontWeight={700}
        letterSpacing="2px"
        lineHeight="1.0em"
      >
        {data.profile.name}
      </Text>

      <Text color={colors.fc2} fontSize={14}>
        {data.profile.title}
      </Text>
    </VStack>
  );
};
