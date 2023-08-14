import React, { useState } from 'react';
import { Text, VStack, HStack, Image, Box } from '@chakra-ui/react';
import { theme } from '../styles';

const photos = ['profile.png', 'profile_alt.png'];

export const Photo = () => {
  const [photoIndex, setPhotoIndex] = useState<any>(0);
  return (
    <Box
      w="100%"
      h="185px"
      position="relative"
      backgroundColor={theme.colors.dGray}
      // border="1px solid hotpink"
    >
      <Image
        borderRadius="full"
        boxSize="145px"
        src={require(`../assets/${photos[photoIndex]}`)}
        alt="profile"
        position="absolute"
        zIndex={10}
        bottom={0}
        right={10}
        onClick={() => setPhotoIndex((p: any) => (p === photos.length - 1 ? 0 : p + 1))}
      />
    </Box>
  );
};
