import React, { useRef } from 'react';
import { Box, Button, Stack, HStack, VStack } from '@chakra-ui/react';
import {
  Contacts,
  ContactsMobile,
  Education,
  EducationMobile,
  Experience,
  ExperienceMobile,
  Header,
  Personal,
  PersonalMobile,
  Photo,
  PhotoMobile,
  SectionDivider,
  Skills,
  SkillsMobile,
  Title,
  TitleMobile,
} from '.';
import { useIsMobile } from '../hooks';
import { theme } from '../styles';
import { jsPDF } from 'jspdf';

interface PDFButtonProps {
  pageRef: any;
}

const PDFButton = ({ pageRef }: PDFButtonProps) => {
  const downloadPdf = () => {
    const content = pageRef.current;
    const doc = new jsPDF({});
    doc.html(content, {
      callback: doc => {
        doc.save('resume-test.pdf');
      },
    });
  };

  return (
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
  );
};

export const Page = () => {
  const isMobile = !!useIsMobile();
  const windowRef = useRef<any>(null);
  const pageRef = useRef<any>(null);
  let width: string = '768px';
  width = '738px';

  return !isMobile ? (
    <Stack ref={windowRef} h="100vh" width="100%" align="center" backgroundColor="#f5f5f5" p={3}>
      <VStack
        ref={pageRef}
        h="100%"
        width={width}
        overflow="auto"
        spacing={0}
        fontFamily={theme.fonts.secondaryFontFamily}
        color={theme.colors.secondaryFontColor}
        borderWidth="1px"
        borderColor="lightgray"
        // boxShadow={`5px 5px 10px`}
        // border="1px dashed green"
      >
        <Header width={width} />

        <HStack w="100%" h="100%" spacing={0}>
          <VStack
            w="31%"
            minW="31%"
            h="100%"
            spacing={5}
            pl={4}
            pr={4}
            backgroundColor={theme.colors.dGray}
            // border="1px solid red"
          >
            <Photo />
            <Contacts />
            <Education />
            <Skills />
            <Personal />
          </VStack>

          <VStack
            w="100%"
            h="100%"
            justify="flext-start"
            spacing={3}
            pl={4}
            pr={8}
            backgroundColor={theme.colors.transparent}
            // border="1px solid red"
          >
            <Title />
            <SectionDivider bg={theme.colors.dGray} my={1.5} />
            <Experience />
          </VStack>
        </HStack>
      </VStack>
    </Stack>
  ) : (
    <Stack ref={windowRef} h="100%" width="100%" align="center" backgroundColor="#f5f5f5">
      <VStack
        ref={pageRef}
        h="100%"
        width="100%"
        // maxWidth={'100vw'}
        // overflow="auto"
        spacing={2}
        fontFamily={theme.fonts.secondaryFontFamily}
        borderWidth="1px"
        borderColor="lightgray"
        // boxShadow={`5px 5px 10px`}
        // border="1px dashed green"
      >
        {/* <Header width={width} /> */}
        <HStack w="100%" align="center" justify="center" spacing={0}>
          <PhotoMobile />
          <TitleMobile />
        </HStack>

        <Stack px={4} py={2} backgroundColor={theme.colors.dGray} w="100%" spacing={0}>
          <ContactsMobile />
        </Stack>

        <Stack px={4} py={2} w="100%" spacing={0}>
          <SkillsMobile />
        </Stack>

        <HStack
          w="100%"
          spacing={0}
          pl={4}
          pr={6}
          py={2}
          backgroundColor={theme.colors.dGray}
          align="flex-start"
        >
          <EducationMobile />
          <PersonalMobile />
        </HStack>

        <Stack pl={4} pr={6} py={2} w="100%" spacing={0}>
          <ExperienceMobile />
        </Stack>
      </VStack>
    </Stack>
  );
};
