import React from 'react';
import { Text, UnorderedList, ListItem, VStack } from '@chakra-ui/react';
import data from '../data';
import { SectionHeader } from './SectionHeader';

export const Education = () => {
  return (
    <VStack maxH="25%" w="100%" px={2} align="flex-start" spacing={0}>
      <SectionHeader title="EDUCATION" />
      <UnorderedList flex={`1 1`}>
        {data.education.map((item, index) => (
          <ListItem key={index} fontSize={11}>
            <Text>{item.what}</Text>
            <Text>{item.whereAndWhen}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};
