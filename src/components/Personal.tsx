import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import data from '../data';

export const Personal = () => {
  return (
    <Flex direction="column" flex={`1 1`} width="100%" textAlign="left" px={4}>
      <SectionHeader title="PERSONAL" />
      <Text fontSize={11} textAlign="justify">
        {data.personal.join(' ')}
      </Text>
    </Flex>
  );
};
