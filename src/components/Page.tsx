import React, { useRef, useState, useEffect } from 'react';
import { Button, Stack, VStack } from '@chakra-ui/react';
import {
  Contacts,
  Education,
  Experience,
  Header,
  Personal,
  SectionDivider,
  Skills,
  Profile,
} from '.';
import { theme } from '../styles';
import { jsPDF } from 'jspdf';

export const Page = () => {
  const appRef = useRef<any>(null);
  const pageRef = useRef<any>(null);
  const [height, setHeight] = useState<any>(0);

  useEffect(() => {
    setHeight(pageRef?.current?.offsetHeight);
  }, []);

  const width: number = height * 0.773;

  const downloadPdf = () => {
    const content = appRef.current;
    const doc = new jsPDF({});
    doc.html(content, {
      callback: doc => {
        doc.save('resume-test.pdf');
      },
    });
  };

  return (
    <Stack color="#505050" height="98vh" ref={appRef}>
      <Button
        onClick={downloadPdf}
        h="20px"
        w="40px"
        fontSize="12px"
        variant="outline"
        position="absolute"
        backgroundColor={theme.colors.dGray}
        top={4}
        left={4}
      >
        PDF
      </Button>
      <VStack
        ref={pageRef}
        overflow="hidden"
        spacing={0}
        fontFamily={`'Nunito', sans-serif`}
        width={width}
        height="98vh"
        borderWidth="1px"
        borderColor="lightgray"
        // boxShadow={`5px 5px 10px`}
      >
        <VStack width="100%" spacing={0}>
          <Header width={width} />
          <Profile />
        </VStack>

        <Stack w="100%" h="100%" spacing={0} direction="row">
          <VStack
            h="100%"
            w="30%"
            zIndex={2}
            backgroundColor={theme.colors.dGray}
            spacing={3}
            pl={2}
            pr={1}
          >
            <SectionDivider />
            <Contacts />
            <SectionDivider my={0} />
            <Education />
            <SectionDivider my={0} />
            <Skills />
            <SectionDivider my={0} />
            <Personal />
          </VStack>

          <VStack
            h="100%"
            w="70%"
            zIndex={1}
            backgroundColor={theme.colors.transparent}
            justify="flext-start"
            spacing={3}
            pl={1}
            pr={5}
          >
            <SectionDivider />
            <Experience />
          </VStack>
        </Stack>
      </VStack>
    </Stack>
  );
};

export const PageMobile = Page;
