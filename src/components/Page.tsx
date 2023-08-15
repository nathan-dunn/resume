import React, { useRef } from 'react';
import { Grid, Button, Stack, HStack, VStack } from '@chakra-ui/react';
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
      backgroundColor={theme.colors.backgroundColor3}
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
  const width: string = '738px';

  return !isMobile ? (
    <Stack
      ref={windowRef}
      h="100%"
      width="100%"
      align="center"
      backgroundColor="#f5f5f5"
      p={3}
      // border="1px dashed orange"
    >
      <Grid
        ref={pageRef}
        h="100%"
        width={width}
        fontFamily={theme.fonts.fontFamily2}
        color={theme.colors.fontColor2}
        borderWidth="1px"
        borderColor="lightgray"
        p={0}
        // boxShadow={`3px 3px 10px`}
        // border="1px dashed green"
      >
        <Header width={width} />
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
            maxW="31%"
            minW="31%"
            h="full"
            spacing={5}
            pl={4}
            pr={4}
            pb={2}
            backgroundColor={theme.colors.backgroundColor3}
            // border="1px solid red"
          >
            <Photo />
            <Contacts />
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
            pb={2}
            backgroundColor={theme.colors.white}
            // border="1px solid red"
          >
            <Title />
            <SectionDivider bg={theme.colors.backgroundColor3} my={1} />
            <Experience />
          </VStack>
        </HStack>
      </Grid>
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
        fontFamily={theme.fonts.fontFamily2}
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

        <Stack px={4} py={2} backgroundColor={theme.colors.backgroundColor3} w="100%" spacing={0}>
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
          backgroundColor={theme.colors.backgroundColor3}
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
