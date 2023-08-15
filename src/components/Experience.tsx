import React from 'react';
import { Box, Flex, Text, ListItem, List, VStack } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { SectionDivider } from './SectionDivider';
import { data, theme } from '../config';
const { colors } = theme;

export const Experience = () => {
  return (
    <VStack
      height="100%"
      width="100%"
      align="left"
      spacing={0}
      // border="1px solid darkblue"
    >
      <SectionHeader color={colors.fc2} title="WORK EXPERIENCE" />

      <List mt={1}>
        {data.experience.map((experience, experienceIndex) => {
          const {
            project,
            employer,
            title,
            dates,
            description,
            tech,
            highlights,
          }: {
            project: string;
            employer: string;
            title: string;
            dates: string;
            description: string;
            tech: string;
            highlights: string[];
          } = experience;

          const fontWeight = 700;
          const fontWeight2 = 500;

          const fontSize1: number = 13;
          const fontSize2: number = 11;

          return (
            <ListItem key={experienceIndex} mb={7}>
              <Flex justify="space-between" fontSize={fontSize1} fontWeight={fontWeight}>
                <Text>{project}</Text>
                <Text>{employer}</Text>
              </Flex>

              <Flex justify="space-between" fontSize={fontSize1} fontWeight={fontWeight}>
                <Text>{title}</Text>
                <Text>{dates}</Text>
              </Flex>

              <SectionDivider bg={colors.backgroundColor3} />

              <Text mb={1} align="justify" fontSize={fontSize2}>
                <Text fontWeight={fontWeight2} display="inline" mr={1}>
                  Project Description:
                </Text>
                {description}
              </Text>

              <Text mb={1} align="justify" fontSize={fontSize2}>
                <Text fontWeight={fontWeight2} display="inline" mr={1}>
                  Tech:
                </Text>
                {tech}
              </Text>

              {/* <Text mb={1} align="justify" fontSize={fontSize2}>
                <Text fontWeight={fontWeight2} display="inline" mr={1}>
                  Highlights:
                </Text>
                {highlights.join('; ') + '.'}
              </Text> */}
            </ListItem>
          );
        })}
      </List>
    </VStack>
  );
};

export const ExperienceMobile = () => {
  return (
    <VStack
      height="100%"
      width="100%"
      align="left"
      spacing={0}
      // border="1px solid darkblue"
    >
      <Box alignSelf="center">
        <SectionHeader title="WORK EXPERIENCE" />
      </Box>

      <List mt={1}></List>
    </VStack>
  );
};
