import React from 'react';
import { Flex, Box, Text, Link, VStack, HStack } from '@chakra-ui/react';
import { useWindowSize } from 'usehooks-ts';
import { SectionHeader } from './SectionHeader';
import { data, theme } from '../config';

const { settings } = theme;

export const Contact = () => {
  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={1}
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

export const ContactMobile = () => {
  const { width } = useWindowSize();
  const columns = width < settings.tabletThreshold ? 1 : 2;
  const part = Math.ceil(data.contacts.length / columns);
  const list1 = data.contacts.slice(0, part);
  const list2 = data.contacts.slice(part);

  return (
    <HStack
      w="100%"
      align="flex-start"
      justify="space-evenly"
      spacing={0}
      p={1}
      // border="1px solid darkblue"
    >
      <VStack align="flex-start" spacing={0}>
        {[...list1].map((contact: any, index: number) => (
          <Link
            key={index}
            href={contact.link}
            cursor={contact.link ? 'pointer' : 'text'}
            _hover={{ textDecoration: contact.link ? 'underline' : 'none' }}
            isExternal
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

      {columns > 1 && (
        <VStack align="flex-start" spacing={0}>
          {list2.map((contact: any, index: number) => (
            <Link
              key={index}
              href={contact.link}
              cursor={contact.link ? 'pointer' : 'text'}
              _hover={{ textDecoration: contact.link ? 'underline' : 'none' }}
              isExternal
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
      )}
    </HStack>
  );
};
