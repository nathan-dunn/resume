import React from 'react';
import { ListItem, UnorderedList, VStack, HStack } from '@chakra-ui/react';
import { useWindowSize } from 'usehooks-ts';
import { SectionHeader, SectionHeaderMobile } from '.';
import { data } from '../config';

interface SkillsListProps {
  list: string[];
  width: string;
}

const SkillsList = ({ list, width }: SkillsListProps) => (
  <UnorderedList pl={1} w={width}>
    {list.map((item: string, index: number) => (
      <ListItem key={index} mb={0}>
        {item}
      </ListItem>
    ))}
  </UnorderedList>
);

export const Skills = () => {
  const part = Math.ceil(data.skills.length / 2);
  const list1 = data.skills.slice(0, part);
  const list2 = data.skills.slice(part);

  return (
    <VStack w="100%" align="flex-start" spacing={0}>
      <SectionHeader title="TECH SKILLS + TOOLS" />

      <HStack w="100%" spacing={0} justify="space-between" align="flex-start">
        <SkillsList list={list1} width="50%" />
        <SkillsList list={list2} width="50%" />
      </HStack>
    </VStack>
  );
};

export const SkillsMobile = () => {
  const { width } = useWindowSize();

  const part = Math.ceil(data.skills.length / 4);
  const list1 = data.skills.slice(0, part);
  const list2 = data.skills.slice(part, part * 2);
  const list3 = data.skills.slice(part * 2, part * 3);

  return (
    <VStack
      w="100%"
      spacing={0}
      //  border="1px solid darkblue"
    >
      <SectionHeaderMobile title="TECH SKILLS + TOOLS" />

      <HStack w={width < 412 ? '100%' : '80%'} justify="center" align="flex-start">
        <SkillsList list={list1} width="33%" />
        <SkillsList list={list2} width="33%" />
        <SkillsList list={list3} width="33%" />
      </HStack>
    </VStack>
  );
};
