import React from 'react';
import { Flex, Text, ListItem, List, VStack, UnorderedList } from '@chakra-ui/react';
import { SectionHeader, SectionHeaderMobile } from './SectionHeader';
import { SectionDivider } from './SectionDivider';
import { data, theme } from '../config';

const { colors, fonts } = theme;

interface BulletListProps {
  list: string[];
}

const BulletList = ({ list }: BulletListProps): JSX.Element => (
  <UnorderedList pl={2}>
    {(list || []).map((str, index) => (
      <ListItem key={index} mb={0.5}>
        <Text key={index}>{str}</Text>
      </ListItem>
    ))}
  </UnorderedList>
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
          const fontWeight = 600;
          const { employer, title, dates }: { employer: string; dates: string; title: string } =
            experience;

          return (
            <ListItem
              key={experienceIndex}
              pb={3}
              // border="1px solid darkblue"
            >
              <Flex justify="space-between" fontSize={fonts.fs1} fontWeight={fontWeight}>
                <Text letterSpacing="1px">{employer.toUpperCase()}</Text>
                <Text>{dates}</Text>
              </Flex>

              <Flex>
                <Text>{title}</Text>
              </Flex>

              <SectionDivider h={0.5} my={1.5} />

              <List>
                {(experience.projects || []).map((project, projectIndex) => {
                  const { name, role }: { name: string; role: string } = project;
                  return (
                    <ListItem key={projectIndex} mb={4}>
                      <Flex mb={1}>
                        <Text as="i">{`${name} Project (${role})`}</Text>
                      </Flex>

                      <BulletList list={project.details} />
                    </ListItem>
                  );
                })}
              </List>
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
      <SectionHeaderMobile color={colors.fc2} title="WORK EXPERIENCE" />

      <List mt={1}>
        {data.experience.map((experience, experienceIndex) => {
          const fontWeight = 600;
          const { employer, title, dates }: { employer: string; dates: string; title: string } =
            experience;

          return (
            <ListItem
              key={experienceIndex}
              pb={3}
              // border="1px solid darkblue"
            >
              <Flex justify="space-between" fontSize={fonts.fs1} fontWeight={fontWeight}>
                <Text letterSpacing="1px">{employer.toUpperCase()}</Text>
                <Text>{dates}</Text>
              </Flex>

              <Flex>
                <Text>{title}</Text>
              </Flex>

              <SectionDivider h={0.5} my={1.5} />

              <List>
                {(experience.projects || []).map((project, projectIndex) => {
                  const { name, role }: { name: string; role: string } = project;
                  return (
                    <ListItem key={projectIndex} mb={4}>
                      <Flex mb={1}>
                        <Text as="i">{`${name} Project (${role})`}</Text>
                      </Flex>

                      <BulletList list={project.details} />
                    </ListItem>
                  );
                })}
              </List>
            </ListItem>
          );
        })}
      </List>
    </VStack>
  );
};
