import React from 'react';
import { Box, Flex, Text, ListItem, List, VStack } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { SectionDivider } from './SectionDivider';
import { data, theme } from '../config';

const { colors, fonts } = theme;

interface BulletProps {
  label: string;
  value: string;
}

const Bullet = ({ label, value }: BulletProps) => (
  <Text mb={0} align="justify" fontSize={fonts.fs1}>
    <Text fontWeight="500" display="inline" mr={1}>
      {`• ${label}:`}
    </Text>
    {value}
  </Text>
);

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
            overview,
            tech,
          }: {
            project: string;
            employer: string;
            title: string;
            dates: string;
            overview: string;
            tech: string;
          } = experience;

          const fontWeight = 600;
          const fontWeight2 = 500;

          return (
            <ListItem
              key={experienceIndex}
              mb={experienceIndex === data.experience.length - 1 ? 0 : 6}
            >
              {/* PROJECT NAME + EMPLOYER */}
              <Flex
                justify="space-between"
                fontSize={fonts.fs1}
                fontWeight={fontWeight}
                letterSpacing="1px"
              >
                <Text>{project}</Text>
                <Text>{employer}</Text>
              </Flex>

              {/* JOB TITLE + DATES */}
              <Flex justify="space-between" fontSize={fonts.fs1} fontWeight={fontWeight}>
                <Text>{title}</Text>
                <Text>{dates}</Text>
              </Flex>

              <SectionDivider h={0.5} />

              <Bullet label="Overview" value={overview} />
              <Bullet label="Tech" value={tech} />
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

      <List mt={1}>
        {data.experience.map((experience, experienceIndex) => {
          const {
            project,
            employer,
            title,
            dates,
            overview,
            tech,
          }: {
            project: string;
            employer: string;
            title: string;
            dates: string;
            overview: string;
            tech: string;
          } = experience;

          const fontWeight = 600;
          const fontWeight2 = 500;

          return (
            <ListItem
              key={experienceIndex}
              mb={experienceIndex === data.experience.length - 1 ? 0 : 6}
            >
              {/* PROJECT NAME + EMPLOYER */}
              <Flex
                justify="space-between"
                fontSize={fonts.fs1}
                fontWeight={fontWeight}
                letterSpacing="1px"
              >
                <Text>{project}</Text>
                <Text>{employer}</Text>
              </Flex>

              {/* JOB TITLE + DATES */}
              <Flex justify="space-between" fontSize={fonts.fs1} fontWeight={fontWeight}>
                <Text>{title}</Text>
                <Text>{dates}</Text>
              </Flex>

              <SectionDivider h={0.5} />

              <Bullet label="Overview" value={overview} />
              <Bullet label="Tech" value={tech} />
            </ListItem>
          );
        })}
      </List>
    </VStack>
  );
};
