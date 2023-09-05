import React, { useRef, useState } from 'react';
import { Box, Grid, Stack, HStack, VStack } from '@chakra-ui/react';
import {
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
import { useWindowSize, useElementSize } from 'usehooks-ts';
import { theme } from '../config';

const { colors, fonts, settings } = theme;

export const Page = () => {
  const windowRef = useRef<HTMLHeadingElement>(null);
  const pageRef = useRef<HTMLHeadingElement>(null);
  const [leftRef, { height: leftHeight }] = useElementSize();
  const [rightRef, { height: rightHeight }] = useElementSize();

  const { width } = useWindowSize();
  const isMobile = width <= settings.mobileThreshold;

  const [hasBoxShadow] = useState(false);

  if (isMobile) {
    return <PageMobile />;
  }

  return (
    <Stack
      ref={windowRef}
      h="100%"
      minH="100vh"
      w="100%"
      maxW="100vw"
      align="center"
      backgroundColor="#F0F0F0"
      p={3}
      overflowY="auto"
      overflowX="hidden"
      // border="1px dashed orange"
    >
      <Grid
        ref={pageRef}
        h="100%"
        w={settings.maxPageWidth}
        maxW="100vw"
        fontFamily={fonts.ff2}
        fontSize={fonts.fs1}
        color={colors.fc1}
        p={0}
        outline="none"
        boxShadow={hasBoxShadow ? `3px 3px 10px` : 'none'}
        overflowY="auto"
        overflowX="hidden"
        // border="1px dashed green"
      >
        <Header />
        <HStack
          w="100%"
          spacing={0}
          align="flex-start"
          // border="1px dashed gold"
        >
          {/* LEFT SIDE */}
          <VStack
            ref={leftRef}
            maxW={settings.pageSplit}
            minW={settings.pageSplit}
            minH={rightHeight}
            pl={4}
            pr={4}
            pb={4}
            bg={colors.bg2}
            spacing={3}
            // border="1px solid red"
          >
            <Photo />
            <Contact />
            <Skills />
            <Education />
            <Personal />
          </VStack>

          {/* RIGHT SIDE */}
          <VStack
            ref={rightRef}
            w="100%"
            minH={leftHeight}
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
  const windowRef = useRef<HTMLHeadingElement>(null);
  const pageRef = useRef<HTMLHeadingElement>(null);
  const { width } = useWindowSize();

  return (
    <Stack
      ref={windowRef}
      h="100%"
      w="100vw"
      minW={settings.minPageWidth}
      align="center"
      backgroundColor="#F0F0F0"
      border="none"
      outline="none"
    >
      <VStack
        ref={pageRef}
        h="100%"
        w="100vw"
        minW={settings.minPageWidth}
        spacing={2}
        fontFamily={fonts.ff2}
        fontSize={fonts.fs1}
        bg={colors.bg1}
        color={colors.fc1}
        border="none"
        outline="none"
        // border="1px dashed green"
      >
        <HeaderMobile />

        <VStack w="100%" align="center" justify="space-evenly" bg={colors.bg1} p={2}>
          <TitleMobile />
        </VStack>

        <Box p={4} bg={colors.bg2} w="100%">
          <ContactMobile />
        </Box>

        <Box p={4} w="100%">
          <SkillsMobile />
        </Box>
        <SectionDivider w="90%" />

        <Box p={4} w="100%">
          <ExperienceMobile />
        </Box>
        <SectionDivider w="90%" />

        <HStack w="100%" align="flex-start" justify="space-evenly" px={6} py={2}>
          <EducationMobile />
          {width >= settings.tabletThreshold && <PersonalMobile />}
        </HStack>

        {width < settings.tabletThreshold && (
          <>
            <SectionDivider w="90%" />

            <Box p={4} w="100%">
              <PersonalMobile />
            </Box>
          </>
        )}
      </VStack>
    </Stack>
  );
};
