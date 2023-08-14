import React, { useState, useEffect, useRef } from 'react';
import { Text, VStack, HStack, Image, Box } from '@chakra-ui/react';
import { theme } from '../styles';
import data from '../data';

const photos = ['profile.png', 'profile_alt.png'];
const { name, title } = data.profile;

export const Profile = () => {
  const profileRef = useRef<any>(null);

  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setHeight(profileRef?.current?.offsetHeight);
  }, []);

  return (
    <HStack w="100%" h="185px" spacing={0} zIndex={1}>
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
      <VStack
        ref={profileRef}
        w="70%"
        h="100%"
        color="#d0826f"
        justify="space-evenly"
        align="flex-start"
        spacing={2}
        px={4}
        py={2}
        mt={100}
      >
        <Text
          fontFamily={theme.fonts.primaryFontFamily}
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
