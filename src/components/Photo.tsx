import { Stack, VStack, Image } from '@chakra-ui/react';
import profilePhoto from '../assets/profile.png';

export const Photo = () => {
  return (
    <VStack
      w="100%"
      align="center"
      justify="flex-end"
      spacing={0}
      h="195px"
      minH="185px"
      // border="1px solid darkblue"
    >
      <Image
        borderRadius="full"
        boxSize="145px"
        src={profilePhoto}
        alt="profile"
        zIndex={5}
      />
    </VStack>
  );
};

export const PhotoMobile = () => {
  return (
    <Stack
      w="33%"
      align="flex-end"
      justify="center"
      spacing={0}
      h="100%"
      // border="1px solid darkblue"
    >
      <Image
        borderRadius="full"
        boxSize="80px"
        src={profilePhoto}
        alt="profile"
        zIndex={5}
      />
    </Stack>
  );
};
