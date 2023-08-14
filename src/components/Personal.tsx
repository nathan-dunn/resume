import React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import data from '../data';

export const Personal = () => {
  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
      <SectionHeader title="PERSONAL" />
      <Text fontSize={11} textAlign="justify">
        {data.personal.join(' ')}
      </Text>
    </VStack>
  );
};
