import React, { useRef } from 'react';
import { Box, Grid, Button, Stack, HStack, VStack } from '@chakra-ui/react';
import {
  Contact,
  ContactMobile,
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
  ColorModeSwitcher,
} from '.';
import { useIsMobile } from '../hooks';
import { theme } from '../config';
import { jsPDF } from 'jspdf';

const { colors, fonts, settings } = theme;

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
      bg={colors.backgroundColor3}
      top={4}
      left={4}
    >
      PDF
    </Button>
  );
};

export const Page = () => {
  const windowRef = useRef<any>(null);
  const pageRef = useRef<any>(null);
  const isMobile = !!useIsMobile();

  return !isMobile ? (
    <Stack
      ref={windowRef}
      h="100%"
      minH="100vh"
      width="100%"
      align="center"
      backgroundColor="#F0F0F0"
      p={3}
      overflow="auto"
      // border="1px dashed orange"
    >
      <Grid
        ref={pageRef}
        h="100%"
        width={settings.pageWidth}
        fontFamily={fonts.ff2}
        fontSize={fonts.fs1}
        color={colors.fc1}
        borderWidth="1px"
        p={0}
        borderColor="lightgray"
        // boxShadow={`3px 3px 10px`}
        // border="1px dashed green"
      >
        <Header width={settings.pageWidth} />
        <HStack
          w="100%"
          height="100%"
          minHeight="100%"
          spacing={0}
          align="flex-start"
          // border="1px dashed gold"
        >
          {/* LEFT SIDE */}
          <VStack
            maxW={settings.pageSplit}
            minW={settings.pageSplit}
            h="full"
            pl={4}
            pr={4}
            pb={4}
            bg={colors.bg2}
            spacing={5}
            // border="1px solid red"
          >
            <Photo />
            <Contact />
            <Education />
            <Skills />
            <Personal />
          </VStack>

          {/* RIGHT SIDE */}
          <VStack
            w="100%"
            h="full"
            justify="flex-start"
            spacing={2}
            pl={4}
            pr={8}
            pb={4}
            bg={colors.bg1}
            // border="1px solid red"
          >
            <Title />
            <SectionDivider h={1.5} my={2} />
            <Experience />
          </VStack>
        </HStack>
      </Grid>
    </Stack>
  ) : (
    <Stack ref={windowRef} h="100%" width="100%" align="center" backgroundColor="#F0F0F0">
      <VStack
        ref={pageRef}
        h="100%"
        width="100%"
        spacing={2}
        fontFamily={fonts.ff2}
        fontSize={fonts.fs1}
        borderWidth="1px"
        borderColor="lightgray"
        bg={colors.bg1}
        // border="1px dashed green"
      >
        {/* <Header width={width} /> */}

        <VStack w="100%" align="center" justify="space-evenly" bg={colors.bg1} px={6} py={2}>
          <TitleMobile />
          {/* <PhotoMobile /> */}

          <ContactMobile />
        </VStack>

        <Box px={4} py={2} bg={colors.bg2} w="100%">
          <SkillsMobile />
        </Box>

        <HStack w="100%" align="flex-start" justify="space-evenly" bg={colors.bg1} px={6} py={2}>
          <EducationMobile />
          <PersonalMobile />
        </HStack>

        <Box px={4} py={2} bg={colors.bg2} w="100%">
          <ExperienceMobile />
        </Box>
      </VStack>
    </Stack>
  );
};
