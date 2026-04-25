import {
  Box,
  Divider,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Section from './Section';

const entourageGroups = [
  {
    title: 'Parents of the Groom',
    names: ['Mr. [Father of the Groom]', 'Mrs. [Mother of the Groom]'],
  },
  {
    title: 'Parents of the Bride',
    names: ['Mr. [Father of the Bride]', 'Mrs. [Mother of the Bride]'],
  },
  {
    title: 'Primary Sponsors',
    names: ['Mr. & Mrs. [Sponsor Name]', 'Mr. & Mrs. [Sponsor Name]'],
  },
  {
    title: 'Ninongs',
    names: ['Mr. [Ninong Name]', 'Mr. [Ninong Name]', 'Mr. [Ninong Name]'],
  },
  {
    title: 'Ninangs',
    names: ['Mrs. [Ninang Name]', 'Mrs. [Ninang Name]', 'Mrs. [Ninang Name]'],
  },
  {
    title: 'Secondary Sponsors',
    groups: [
      { label: 'Candle', names: ['[Candle Sponsor 1]', '[Candle Sponsor 2]'] },
      { label: 'Veil', names: ['[Veil Sponsor 1]', '[Veil Sponsor 2]'] },
      { label: 'Cord', names: ['[Cord Sponsor 1]', '[Cord Sponsor 2]'] },
    ],
  },
  {
    title: 'Maid of Honor',
    names: ['[Maid of Honor Name]'],
  },
  {
    title: 'Best Man',
    names: ['[Best Man Name]'],
  },
  {
    title: 'Bridesmaids',
    names: [
      '[Bridesmaid Name]',
      '[Bridesmaid Name]',
      '[Bridesmaid Name]',
      '[Bridesmaid Name]',
    ],
  },
  {
    title: 'Groomsmen',
    names: [
      '[Groomsman Name]',
      '[Groomsman Name]',
      '[Groomsman Name]',
      '[Groomsman Name]',
    ],
  },
  {
    title: 'Flower Girls',
    names: ['[Flower Girl Name]', '[Flower Girl Name]'],
  },
  {
    title: 'Ring Bearer',
    names: ['[Ring Bearer Name]'],
  },
];

function EntourageSection() {
  return (
    <Section
      id="entourage"
      eyebrow="Entourage"
      title="Our Wedding Entourage"
      description="A list of the people who will stand with us on our special day. Replace the placeholder names with your final entourage list."
      bg="white"
    >
      <VStack
        spacing={{ base: 8, md: 10 }}
        maxW="5xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 10 }}
        bg="linear-gradient(180deg, rgba(245,248,244,0.55) 0%, rgba(255,255,255,1) 100%)"
        borderRadius="3xl"
        border="1px solid"
        borderColor="sage.100"
        boxShadow="sm"
      >
        <VStack spacing={3}>
          <HStack spacing={3} justify="center">
            <Box w="12" h="1px" bg="gold.500" opacity={0.7} />
            <Text
              fontFamily="heading"
              fontSize={{ base: 'lg', md: 'xl' }}
              color="sage.800"
              letterSpacing="0.08em"
            >
              With Love and Honor
            </Text>
            <Box w="12" h="1px" bg="gold.500" opacity={0.7} />
          </HStack>
          <Text color="sage.700" textAlign="center" maxW="2xl" fontSize="sm">
            Presented in the style of a wedding program for a more elegant and
            timeless look.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 10 }}
          w="full"
        >
          {entourageGroups.map((group) => (
            <VStack
              key={group.title}
              align="stretch"
              spacing={4}
              textAlign="center"
            >
              <VStack spacing={2}>
                <Text
                  color="black"
                  fontWeight="semibold"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  fontFamily="heading"
                  letterSpacing="0.03em"
                >
                  {group.title}
                </Text>
                <Box w="16" h="1px" bg="sage.300" mx="auto" />
              </VStack>

              {group.names && (
                <Box pt={1} w="full">
                  {group.names.map((name) => (
                    <Text
                      key={name}
                      color="sage.800"
                      fontSize={{ base: 'sm', md: 'md' }}
                      mb={2}
                      lineHeight="tall"
                    >
                      {name}
                    </Text>
                  ))}
                </Box>
              )}

              {group.groups && (
                <VStack align="stretch" spacing={4} w="full" pt={1}>
                  {group.groups.map((subgroup, index) => (
                    <Box key={subgroup.label}>
                      <Text
                        color="sage.700"
                        fontWeight="semibold"
                        fontSize="sm"
                        mb={2}
                        textTransform="uppercase"
                        letterSpacing="0.12em"
                      >
                        {subgroup.label}
                      </Text>
                      {subgroup.names.map((name) => (
                        <Text
                          key={name}
                          color="sage.800"
                          fontSize={{ base: 'sm', md: 'md' }}
                          mb={1.5}
                        >
                          {name}
                        </Text>
                      ))}
                      {index < group.groups.length - 1 && (
                        <Divider mt={4} borderColor="sage.100" />
                      )}
                    </Box>
                  ))}
                </VStack>
              )}
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Section>
  );
}

export default EntourageSection;
