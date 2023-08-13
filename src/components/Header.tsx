import React from 'react';
import { Box } from '@chakra-ui/react';
import { theme } from '../styles';

interface HeaderProps {
  width: number;
}

export const Header = ({ width }: HeaderProps) => {
  return (
    <Box w={width} position="absolute" h="140px">
      <Box
        width={0}
        height={0}
        position="absolute"
        zIndex={3}
        borderTop={`200px solid ${theme.colors.dBlue}`} // bottom-left corner
        borderRight={`320px solid transparent`}
      />
      <Box
        width={0}
        height={0}
        position="absolute"
        zIndex={4}
        borderTop={`150px solid ${theme.colors.dOrange}`} // bottom-right corner
        borderLeft={`630px solid transparent`}
        right={0}
      />
    </Box>
  );
};
