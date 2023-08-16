import React, { useRef } from 'react';
import { Box, Grid, Button, Stack, HStack, VStack } from '@chakra-ui/react';
import {
  ColorModeSwitcher,
  Contact,
  ContactMobile,
  Education,
  EducationMobile,
  Experience,
  ExperienceMobile,
  Header,
  HeaderMobile,
  Personal,
  PersonalMobile,
  Photo,
  SectionDivider,
  Skills,
  SkillsMobile,
  Title,
  TitleMobile,
} from '.';
// import { useIsMobile } from '../hooks';
import { useWindowSize } from 'usehooks-ts';
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
  const { width } = useWindowSize();
  const isMobile = width <= settings.mobile;

  if (isMobile) {
    return <PageMobile />;
  }

  return (
    <Stack
      ref={windowRef}
      h="100%"
      minH="100vh"
      w="100%"
      align="center"
      backgroundColor="#F0F0F0"
      p={3}
      overflow="auto"
      // border="1px dashed orange"
    >
      <Grid
        ref={pageRef}
        h="100%"
        w={settings.pageWidth}
        fontFamily={fonts.ff2}
        fontSize={fonts.fs1}
        color={colors.fc1}
        borderWidth="1px"
        p={0}
        borderColor="lightgray"
        // boxShadow={`3px 3px 10px`}
        // border="1px dashed green"
      >
        <Header />
        <HStack
          w="100%"
          h="100%"
          minH="100%"
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
            spacing={6}
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
  );
};

export const PageMobile = () => {
  const windowRef = useRef<any>(null);
  const pageRef = useRef<any>(null);
  const { width } = useWindowSize();

  return (
    <Stack
      ref={windowRef}
      h="100%"
      w="100vw"
      minW={settings.minPageWidth}
      align="center"
      backgroundColor="#F0F0F0"
    >
      <VStack
        ref={pageRef}
        h="100%"
        w="100vw"
        minW={settings.minPageWidth}
        spacing={2}
        fontFamily={fonts.ff2}
        fontSize={fonts.fs1}
        borderWidth="1px"
        borderColor="lightgray"
        bg={colors.bg1}
        color={colors.fc1}
        // border="1px dashed green"
      >
        <HeaderMobile />

        <VStack w="100%" align="center" justify="space-evenly" bg={colors.bg1} p={2}>
          <TitleMobile />
        </VStack>
        {/* <SectionDivider w="90%" /> */}

        <Box p={4} bg={colors.bg2} w="100%">
          <ContactMobile />
        </Box>
        {/* <SectionDivider w="90%" /> */}

        <Box p={4} bg={colors.bg1} w="100%">
          <SkillsMobile />
        </Box>
        <SectionDivider w="90%" />

        <Box p={4} bg={colors.bg1} w="100%">
          <ExperienceMobile />
        </Box>
        <SectionDivider w="90%" />

        <HStack w="100%" align="flex-start" justify="space-evenly" bg={colors.bg1} px={6} py={2}>
          <EducationMobile />
          {width >= 412 && <PersonalMobile />}
        </HStack>

        {width < 412 && (
          <>
            <SectionDivider w="90%" />

            <Box p={4} bg={colors.bg1} w="100%">
              <PersonalMobile />
            </Box>
          </>
        )}
      </VStack>
    </Stack>
  );
};
