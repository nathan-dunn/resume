import React from 'react';
import { Text, VStack } from '@chakra-ui/react';
import { useWindowSize } from 'usehooks-ts';
import { theme, data } from '../config';

const { colors, fonts, settings } = theme;

export const Title = () => {
  const height: string = '170px';

  return (
    <VStack
      h={height}
      minH={height}
      w="100%"
      justify="flex-end"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
      <Text
        color={colors.fc2}
        fontSize={32}
        fontFamily={fonts.ff1}
        fontWeight={600}
        letterSpacing="2px"
      >
        {data.profile.name}
      </Text>

      <Text color={colors.fc2} fontSize={16} letterSpacing="3px">
        {data.profile.title}
      </Text>
    </VStack>
  );
};

export const TitleMobile = () => {
  const { width } = useWindowSize();
  const _width = Math.max(width, settings.minPageWidth);
  const height: number = _width * 0.33;

  return (
    <VStack
      minH="125px"
      maxH="130px"
      h={height}
      w="100%"
      justify="flex-end"
      align="center"
      spacing={1}
      p={2}
      // border="1px solid darkblue"
    >
      <Text
        color={colors.fc1}
        fontSize={26}
        fontFamily={fonts.ff1}
        fontWeight={700}
        letterSpacing="2px"
        lineHeight="1.0em"
      >
        {data.profile.name}
      </Text>

      <Text color={colors.fc1} fontSize={16}>
        {data.profile.title}
      </Text>
    </VStack>
  );
};
