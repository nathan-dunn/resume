import React from 'react';
import { Flex, Box, Text, Link, VStack } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { data } from '../config';

export const Contacts = () => {
  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
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
            <Text wordBreak={'break-word'}>{contact.text}</Text>
          </Flex>
        </Link>
      ))}
    </VStack>
  );
};

export const ContactsMobile = () => {
  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
      <Box alignSelf="center">
        <SectionHeader title="CONTACT" />
      </Box>

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
            <Text wordBreak={'break-word'}>{contact.text}</Text>
          </Flex>
        </Link>
      ))}
    </VStack>
  );
};
