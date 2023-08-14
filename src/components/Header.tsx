import React from 'react';
import { Box } from '@chakra-ui/react';
import { theme } from '../styles';

interface HeaderProps {
  width: string;
}

export const Header = ({ width }: HeaderProps) => {
  return (
    <Box width={width} position="absolute" h="185px" overflow="hidden">
      <Box
        width={0}
        height={0}
        position="absolute"
        zIndex={8}
        borderTop={`180px solid ${theme.colors.dBlue}`} // bottom-left corner
        borderRight={`320px solid transparent`}
      />
      <Box
        width={0}
        height={0}
        position="absolute"
        zIndex={9}
        borderTop={`150px solid ${theme.colors.dOrange}`} // bottom-right corner
        borderLeft={`630px solid transparent`}
        right={0}
      />
    </Box>
  );
};
