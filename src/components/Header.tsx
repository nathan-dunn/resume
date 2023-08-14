import React from 'react';
import { Box } from '@chakra-ui/react';
import { theme } from '../styles';

interface HeaderProps {
  width: string;
}

export const Header = ({ width }: HeaderProps) => {
  return (
    <Box
      width={width}
      position="absolute"
      // border="1px dashed darkblue"
    >
      <Box
        width={0}
        height={0}
        position="absolute"
        zIndex={3}
        borderTop={`180px solid ${theme.colors.dBlue}`} // bottom-left corner
        borderRight={`320px solid transparent`}
      />
      <Box
        width={0}
        height={0}
        position="absolute"
        zIndex={4}
        borderTop={`135px solid ${theme.colors.dOrange}`} // bottom-right corner
        borderLeft={`630px solid transparent`}
        right={0}
      />
    </Box>
  );
};
