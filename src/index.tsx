import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Flex, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Page, PageMobile } from './components';
import { theme } from './styles';

import './styles/styles.scss';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ChakraProvider theme={theme}>
      <ColorModeScript />

      <Flex flexDirection="column" alignItems="center" backgroundColor="#f5f5f5" p={3}>
        {window.matchMedia('only screen and (max-width: 760px)').matches ? (
          <PageMobile key="page-mobile" />
        ) : (
          <Page key="page" />
        )}
      </Flex>
    </ChakraProvider>
  </>
);
