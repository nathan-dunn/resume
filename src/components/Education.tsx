import React from 'react';
import { Box, Text, UnorderedList, ListItem, VStack } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { data } from '../config';

export const Education = () => {
  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
      <SectionHeader title="EDUCATION" />
      <UnorderedList>
        {data.education.map((item, index) => (
          <ListItem key={index}>
            <Text>{item}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export const EducationMobile = () => {
  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
      <Box alignSelf="center">
        <SectionHeader title="EDUCATION" />
      </Box>
      <UnorderedList>
        {data.education.map((item, index) => (
          <ListItem key={index}>
            <Text>{item}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};
