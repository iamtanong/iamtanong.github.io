import { EN_SPACE, MDASH, RSQUO } from "@/constants";
import {
  Blockquote,
  Box,
  Divider,
  Flex,
  Space,
  Text,
  Title,
} from "@mantine/core";

export default function Home() {
  const a = "&u0027;";
  return (
    <Flex direction="column" className="my-4 px-6 md:w-2/3 md:mx-auto lg:w-1/2">
      <Title order={1} ta="center" tt="uppercase">
        Tanongsak {EN_SPACE} Anurak
      </Title>
      <Space h="md" />
      <Title order={3} ta="center">
        Student & Developer
      </Title>
      <Space h="md" />
      <Blockquote cite={`Makise Kurisu ${MDASH} Steins;Gate`}>
        I don{RSQUO}t want to deny who I{RSQUO}ve been. Because even my failures
        are a part of who I am today.
      </Blockquote>
      <Space h="md" />
      <Divider size="md" />
      <Space h="md" />
      <Text ta="left">
        {EN_SPACE} Hi there, I'm a student of Computer Engineering at
        Chulalongkorn University, Thailand. I have a passion for software
        development and programming.
      </Text>
      <Space h="sm" />
      <Text ta="left">
        {EN_SPACE} I love to explore and deep dive into the world of computer
        science. My interests range from web development to system design. I
        also have an interest in quantum computing and hardware design lately.
      </Text>
      <Space h="sm" />
      <Text ta="left">
        {EN_SPACE} I plan to start my own blog soon. To shared things I learn,
        projects I work on, and my thoughts on various topics in the tech world.
      </Text>
    </Flex>
  );
}
