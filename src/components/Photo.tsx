import React, { useState } from 'react';
import { Stack, VStack, HStack, Image } from '@chakra-ui/react';
import { theme } from '../styles';

const photos = ['profile.png', 'profile_alt.png'];

export const Photo = () => {
  const [photoIndex, setPhotoIndex] = useState<any>(0);
  return (
    <VStack
      w="100%"
      // px={2}
      align="center"
      justify="flex-end"
      spacing={0}
      h="185px"
      minH="185px"
      // border="1px solid darkblue"
    >
      <Image
        borderRadius="full"
        boxSize="145px"
        src={require(`../assets/${photos[photoIndex]}`)}
        alt="profile"
        zIndex={5}
        onClick={() => setPhotoIndex((p: any) => (p === photos.length - 1 ? 0 : p + 1))}
      />
    </VStack>
  );
};

export const PhotoMobile = () => {
  const [photoIndex, setPhotoIndex] = useState<any>(0);
  return (
    <Stack
      w="33%"
      // px={2}
      align="flex-end"
      justify="center"
      spacing={0}
      // h="185px"
      // minH="185px"
      h="100%"
      // border="1px solid darkblue"
    >
      <Image
        borderRadius="full"
        boxSize="80px"
        src={require(`../assets/${photos[photoIndex]}`)}
        alt="profile"
        zIndex={5}
        onClick={() => setPhotoIndex((p: any) => (p === photos.length - 1 ? 0 : p + 1))}
      />
    </Stack>
  );
};
