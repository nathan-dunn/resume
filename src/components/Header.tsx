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
        borderTop={`180px solid ${theme.colors.backgroundColor2}`} // bottom-left
        borderRight={`360px solid transparent`} // top-right
      />
      <Box
        width={0}
        height={0}
        position="absolute"
        zIndex={4}
        borderTop={`135px solid ${theme.colors.backgroundColor1}`} // bottom-right
        borderLeft={`720px solid transparent`} // top-left
        right={0}
      />
    </Box>
  );
};
