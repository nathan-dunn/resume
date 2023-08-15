import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { data } from '../config';

export const Personal = () => {
  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
      <SectionHeader title="PERSONAL" />
      <Text textAlign="justify">{data.personal.join(' ')}</Text>
    </VStack>
  );
};

export const PersonalMobile = () => {
  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
      <Box alignSelf="center">
        <SectionHeader title="PERSONAL" />
      </Box>
      <Text textAlign="justify">{data.personal.join(' ')}</Text>
    </VStack>
  );
};
