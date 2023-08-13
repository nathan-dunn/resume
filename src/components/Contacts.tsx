import React from 'react';
import { Flex, Box, Text, Link, VStack } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import data from '../data';

export const Contacts = () => {
  return (
    <VStack maxH="25%" w="100%" px={2} align="flex-start" spacing={0}>
      <SectionHeader title="CONTACT" />

      {data.contacts.map((contact: any, index: number) => (
        <Link
          key={index}
          href={contact.link}
          cursor={contact.link ? 'pointer' : 'text'}
          _hover={{ textDecoration: contact.link ? 'underline' : 'none' }}
          isExternal
          mb={1}
        >
          <Flex flex="1" align="center">
            <Box mr={2} fontSize={22}>
              {contact.icon}
            </Box>
            <Text fontSize={11} wordBreak={'break-word'}>
              {contact.text}
            </Text>
          </Flex>
        </Link>
      ))}
    </VStack>
  );
};
