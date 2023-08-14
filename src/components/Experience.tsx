import React from 'react';
import { Flex, Text, UnorderedList, ListItem, List, VStack } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { theme } from '../styles';
import data from '../data';

export const Experience = () => {
  return (
    <VStack
      height="100%"
      width="100%"
      align="left"
      // px={4}
      spacing={0}
      // border="1px solid darkblue"
    >
      <SectionHeader color={theme.colors.dOrange} title="WORK EXPERIENCE" />
      <List mt={1}>
        {data.experience.map((job, jobIndex) => (
          <ListItem key={jobIndex}>
            <Flex direction="row" justify="space-between" mb={1}>
              <Text fontSize={13} fontWeight={700}>
                {job.employer.toUpperCase()}
              </Text>
              <Text fontSize={13} fontWeight={700}>
                {job.dates.toUpperCase()}
              </Text>
            </Flex>

            <List fontSize={11} mb={4}>
              {job.projects.map((project, projectIndex) => (
                <ListItem key={projectIndex} ml={1} mb={2}>
                  {project.projectName && <Text>{project.projectName}</Text>}
                  <UnorderedList>
                    {project.details.map((detail, detailIndex) => (
                      <ListItem key={detailIndex} ml={2}>
                        <Text align="justify">{detail}</Text>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};
