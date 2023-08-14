import React from 'react';
import { Stack, ListItem, UnorderedList, VStack } from '@chakra-ui/react';
import { SectionHeader } from '.';
import data from '../data';

export const Skills = () => {
  const part = Math.ceil(data.skills.length / 2);
  const list1 = data.skills.slice(0, part);
  const list2 = data.skills.slice(part);

  return (
    <VStack
      w="100%"
      align="flex-start"
      spacing={0}
      // border="1px solid darkblue"
    >
      <SectionHeader title="TECH SKILLS + TOOLS" />

      <Stack direction="row">
        <UnorderedList>
          {list1.map((skill, index) => (
            <ListItem key={index} fontSize={11}>
              {skill}
            </ListItem>
          ))}
        </UnorderedList>
        <UnorderedList>
          {list2.map((skill, index) => (
            <ListItem key={index} fontSize={11}>
              {skill}
            </ListItem>
          ))}
        </UnorderedList>
      </Stack>
    </VStack>
  );
};
