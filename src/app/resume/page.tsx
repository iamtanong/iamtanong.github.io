"use client";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import {
  Anchor,
  Box,
  Container,
  Flex,
  Grid,
  Group,
  Paper,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";

type ContactInfo = {
  mobile: string;
  email: string;
  portfolio: string;
};

type Content = {
  title: string;
  period: string;
  description: string;
  details?: string;
};

function ResumePage() {
  const contactInfo: ContactInfo = {
    mobile: "(+66) 092-449-8611",
    email: "tanongsak.anurak@gmail.com",
    portfolio: "/",
  };

  const education: GridContentProps = {
    title: "Education",
    content: [
      {
        title: "Chulalongkorn University",
        period: "2023 - Present",
        description: "Bachelor of Engineering in Computer Engineering",
      },
      {
        title: "Princess Chulabhorn Science High School Nakhon Si Thammarat",
        period: "2019 - 2022",
        description: "High School",
      },
    ],
  };

  const experience: GridContentProps = {
    title: "Experience",
    content: [
      {
        title: "Software Developer Intern",
        description: "Internship at Blockfint Co., Ltd.",
        period: "May - July 2024",
      },
      {
        title: "Full Stack Developer Intern",
        description: "Internship at Gosoft Co., Ltd.",
        period: "May - July 2025",
      },
    ],
  };

  const RenderContactInfo = (label: string, value: string) => {
    switch (label) {
      case "mobile":
        return (
          <Anchor href={`tel:${value}`} underline="not-hover">
            {value}
          </Anchor>
        );
      case "email":
        return (
          <Anchor href={`mailto:${value}`} underline="not-hover">
            {value}
          </Anchor>
        );
      case "portfolio":
        return (
          <Anchor href={value} underline="not-hover">
            {value}
          </Anchor>
        );
      default:
        return <Text>{value}</Text>;
    }
  };

  return (
    <Container size="md" my="lg">
      <Paper shadow="sm" p="lg" withBorder>
        {/* Top section */}
        <Flex direction="row" justify="space-between" wrap="wrap">
          <Flex direction="column" gap="md">
            <Title order={1} c="blue" fw="500">
              Tanongsak Anurak
            </Title>
            <Title order={5} fw="500" c="gray.8">
              Curriculum Vitae
            </Title>
          </Flex>
          <Group align="flex-start">
            <Stack>
              {Object.entries(contactInfo).map(([label, value]) => (
                <Group key={label} justify="flex-end">
                  <Text size="sm">{RenderContactInfo(label, value)}</Text>
                </Group>
              ))}
            </Stack>
            <Stack className="float-left md:float-right">
              {Object.entries(contactInfo).map(([label]) => (
                <Text key={label} size="sm" c="dimmed">
                  {capitalizeFirstLetter(label)}
                </Text>
              ))}
            </Stack>
          </Group>
        </Flex>
        <Space h="lg" />

        {/* Content section */}
        <GridContent title={education.title} content={education.content} />
        <GridContent title={experience.title} content={experience.content} />
      </Paper>
    </Container>
  );
}

type GridContentProps = {
  title: string;
  content: Content[];
};

function GridContent({ title, content }: GridContentProps) {
  return (
    <Grid gutter={{ base: "md", md: "xl" }} my="lg">
      {/* Left column: Section title */}
      <Grid.Col span={{ base: 12, md: 3 }}>
        <Title order={3} fw={500} c="blue">
          {title}
        </Title>
      </Grid.Col>

      {/* Right column */}
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Stack gap="md">
          {content.map((item) => (
            <Grid key={item.title} align="flex-start">
              {/* Middle: */}
              <Grid.Col span={{ base: 12, md: 9 }}>
                <Title order={5}>{item.title}</Title>
                <Text c="gray.6">{item.description}</Text>

                {item.details && (
                  <Box bg="gray.0" p="xs">
                    <Text size="sm">{item.details}</Text>
                  </Box>
                )}
              </Grid.Col>

              {/* Right: Period */}
              <Grid.Col span={{ base: 12, md: 3 }} ta="right">
                <Text c="gray.6">{item.period}</Text>
              </Grid.Col>
            </Grid>
          ))}
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default ResumePage;
