import React from 'react';
import { Box, Flex, Text, UnorderedList, ListItem, List, VStack } from '@chakra-ui/react';
import { SectionHeader } from './SectionHeader';
import { SectionDivider } from './SectionDivider';
import { theme } from '../styles';
import data from '../data';

export const Experience = () => {
  return (
    <VStack
      height="100%"
      width="100%"
      align="left"
      spacing={0}
      // border="1px solid darkblue"
    >
      <SectionHeader color={theme.colors.fontColor3} title="WORK EXPERIENCE" />

      <List mt={1}>
        {data.experience.map((experience, experienceIndex) => {
          const {
            project,
            employer,
            role,
            dates,
            description,
            tech,
          }: {
            project: string;
            employer: string;
            role: string;
            dates: string;
            description: string;
            tech: string;
          } = experience;

          return (
            <ListItem key={experienceIndex} mb={6} fontSize={13}>
              <Flex justify="space-between" fontWeight={600}>
                <Text>{project}</Text>
                <Text>{employer}</Text>
              </Flex>

              <Flex justify="space-between" fontWeight={600}>
                <Text>{role}</Text>
                <Text>{dates}</Text>
              </Flex>

              <SectionDivider bg={theme.colors.backgroundColor3} />
              <Text mb={1}>
                <Text fontWeight={600} display="inline" mr={1}>
                  Project Description:
                </Text>
                {description}
              </Text>
              <Text fontWeight={600} display="inline" mr={1}>
                Tech:
              </Text>
              {tech}
            </ListItem>
          );
          // <ListItem key={experienceIndex}>
          //   <Flex direction="column" justify="flex-start" mb={1}>
          //     <Text fontSize={11} fontWeight={700}>
          //       {`${job.jobTitle.toUpperCase()}`}
          //     </Text>
          //     <Flex direction="row" justify="space-between">
          //       <Text fontSize={11} fontWeight={700}>
          //         {job.employer.toUpperCase()}
          //       </Text>
          //       <Text fontSize={11} fontWeight={700}>
          //         {job.dates.toUpperCase()}
          //       </Text>
          //     </Flex>
          //   </Flex>
          //   {/* PROJECTS */}
          //   <List fontSize={11} mb={4}>
          //     {job.projects.map((project, projectIndex) => (
          //       <ListItem key={projectIndex} ml={1} mb={2}>
          //         {project.projectName && <Text>{project.projectName}</Text>}
          //         <UnorderedList>
          //           {project.details.map((detail, detailIndex) => (
          //             <ListItem key={detailIndex} ml={2}>
          //               <Text align="justify">{detail}</Text>
          //             </ListItem>
          //           ))}
          //         </UnorderedList>
          //       </ListItem>
          //     ))}
          //   </List>
          // </ListItem>
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
