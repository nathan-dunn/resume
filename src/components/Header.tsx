import React from 'react';
import { Box } from '@chakra-ui/react';
import { useWindowSize } from 'usehooks-ts';
import { theme } from '../config';

const { colors, settings } = theme;

export const Header = () => {
  return (
    <Box
      width={settings.maxPageWidth - 2} // account for border
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

export const HeaderMobile = () => {
  const { width } = useWindowSize();

  const _width = Math.max(width, settings.minPageWidth);

  const shape1 = {
    borderTop: `${_width * 0.2}px solid ${colors.tc2}`, // bottom-left
    borderRight: `${_width * 0.385}px solid transparent`, // top-right
  };

  const shape2 = {
    borderTop: `${_width * 0.15}px solid ${colors.tc1}`, // bottom-right
    borderLeft: `${_width * 0.974}px solid transparent`, // top-left
  };

  return (
    <Box
      width={_width}
      minW="100vw"
      position="absolute"
      // border="1px dashed darkblue"
    >
      <Box
        width={0}
        height={0}
        position="absolute"
        zIndex={3}
        borderTop={shape1.borderTop}
        borderRight={shape1.borderRight}
      />
      <Box
        width={0}
        height={0}
        position="absolute"
        zIndex={4}
        borderTop={shape2.borderTop}
        borderLeft={shape2.borderLeft}
        right={0}
      />
    </Box>
  );
};
