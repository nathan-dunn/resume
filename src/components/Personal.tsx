import { Box, VStack, Text } from '@chakra-ui/react';
import { SectionHeader, SectionHeaderMobile } from './SectionHeader';
import { data } from '../config';

export const Personal = () => {
  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
      <SectionHeader title="PERSONAL" />
      <Box>
        {data.personal.map((item: string, index: number) => (
          <Text key={index} textAlign="justify" mb={2}>
            {item}
          </Text>
        ))}
      </Box>
    </VStack>
  );
};

export const PersonalMobile = () => {
  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
      <SectionHeaderMobile title="PERSONAL" />
      <Box>
        {data.personal.map((item: string, index: number) => (
          <Text key={index} textAlign="justify" mb={2}>
            {item}
          </Text>
        ))}
      </Box>
    </VStack>
  );
};
