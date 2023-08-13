import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { theme } from '../styles';
import data from '../data';

const photos = ['profile.png', 'profile_alt.png'];

export const Photo = () => {
  const [photoIndex, setPhotoIndex] = useState<any>(0);

  return (
    <Box w="30%" h="100%" position="relative" backgroundColor={theme.colors.dGray}>
      <Image
        borderRadius="full"
        boxSize="145px"
        src={require(`../assets/${photos[photoIndex]}`)}
        alt="profile"
        m="auto"
        position="absolute"
        zIndex={5}
        bottom={-4}
        right={8}
        onClick={() => setPhotoIndex((p: any) => (p === photos.length - 1 ? 0 : p + 1))}
      />
    </Box>
  );
};
