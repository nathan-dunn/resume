import React from 'react';
import { Box } from '@chakra-ui/react';
import { theme } from '../config';

const { colors } = theme;

interface HeaderProps {
  width: number;
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
        borderTop={`190px solid ${colors.tc2}`} // bottom-left
        borderRight={`360px solid transparent`} // top-right
      />
      <Box
        width={0}
        height={0}
        position="absolute"
        zIndex={4}
        borderTop={`135px solid ${colors.tc1}`} // bottom-right
        borderLeft={`720px solid transparent`} // top-left
        right={0}
      />
    </Box>
  );
};
