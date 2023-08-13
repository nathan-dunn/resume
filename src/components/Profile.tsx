import React from 'react';
import { Text, VStack, HStack } from '@chakra-ui/react';
import { Photo } from './Photo';
import data from '../data';

const { name, title } = data.profile;

export const Profile = () => {
  return (
    <HStack w="100%" spacing={0}>
      <Photo />
      <VStack
        w="70%"
        color="#d0826f"
        justify="space-evenly"
        align="flex-start"
        spacing={2}
        px={4}
        py={2}
        mt={100}
      >
        <Text
          fontFamily={`'Montserrat', sans-serif`}
          fontSize={32}
          fontWeight={700}
          letterSpacing="2px"
          lineHeight="1.0em"
        >
          {name}
        </Text>
        <Text fontSize={16}>{title}</Text>
      </VStack>
    </HStack>
  );
};
