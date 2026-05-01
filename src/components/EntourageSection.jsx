import { Box, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";

/* ─── DATA ─────────────────────────────────────────────────────────────── */
const parents = {
  grooms: ["[Parent Name]", "[Parent Name]"],
  bride: ["[Parent Name]", "[Parent Name]"]
};

const principalSponsors = {
  ninongs: ["[Ninong Name]", "[Ninong Name]", "[Ninong Name]", "[Ninong Name]"],
  ninangs: ["[Ninang Name]", "[Ninang Name]", "[Ninang Name]", "[Ninang Name]"]
};

const bestMan = "[Best Man Name]";
const maidOfHonor = "[Maid of Honor Name]";

const secondarySponsors = [
  {
    label: "Candle",
    tagline: "To light our path",
    names: ["[Candle Sponsor 1]", "[Candle Sponsor 2]"]
  },
  {
    label: "Veil",
    tagline: "To clothe us as one",
    names: ["[Veil Sponsor 1]", "[Veil Sponsor 2]"]
  },
  {
    label: "Cord",
    tagline: "To bind us together",
    names: ["[Cord Sponsor 1]", "[Cord Sponsor 2]"]
  }
];

const groomsmen = [
  "[Groomsman Name]",
  "[Groomsman Name]",
  "[Groomsman Name]",
  "[Groomsman Name]"
];
const bridesmaids = [
  "[Bridesmaid Name]",
  "[Bridesmaid Name]",
  "[Bridesmaid Name]",
  "[Bridesmaid Name]"
];

const bearers = [
  { label: "Ring Bearer", name: "[Ring Bearer Name]" },
  { label: "Bible Bearer", name: "[Bible Bearer Name]" },
  { label: "Coin Bearer", name: "[Coin Bearer Name]" }
];

const flowerGirls = ["[Flower Girl Name]", "[Flower Girl Name]"];

/* ─── HELPERS ───────────────────────────────────────────────────────────── */

function SectionDivider() {
  return (
    <HStack w="full" spacing={3} py={2}>
      <Box flex={1} h="1px" bg="sage.100" />
      <Text color="gold.500" fontSize="sm">
        ✦
      </Text>
      <Box flex={1} h="1px" bg="sage.100" />
    </HStack>
  );
}

function BlockTitle({ children }) {
  return (
    <VStack spacing={2} textAlign="center">
      <Text
        fontFamily="heading"
        fontSize={{ base: "xl", md: "2xl" }}
        color="sage.800"
        letterSpacing="0.08em"
        fontWeight="300"
      >
        {children}
      </Text>
      <Box
        w="16"
        h="px"
        bgGradient="linear(to-r, transparent, gold.500, transparent)"
      />
    </VStack>
  );
}

function Tagline({ children }) {
  return (
    <Text
      color="sage.500"
      fontSize="xs"
      textTransform="uppercase"
      letterSpacing="0.18em"
      fontWeight="semibold"
      textAlign="center"
      fontStyle="italic"
    >
      {children}
    </Text>
  );
}

function NameList({ names }) {
  return (
    <VStack spacing={1.5} textAlign="center">
      {names.map((name, index) => (
        <Text
          key={`${name}-${index}`}
          color="sage.700"
          fontSize={{ base: "sm", md: "md" }}
          fontFamily="heading"
          fontWeight="300"
          letterSpacing="0.04em"
          lineHeight="tall"
        >
          {name}
        </Text>
      ))}
    </VStack>
  );
}

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

function EntourageSection() {
  return (
    <Section
      id="entourage"
      eyebrow="Entourage"
      title="Our Wedding Entourage"
      description="The people who will stand with us and share in the joy of our special day."
      bg="white"
    >
      <VStack
        spacing={{ base: 10, md: 14 }}
        maxW="4xl"
        mx="auto"
        textAlign="center"
      >
        {/* Header ornament */}
        <HStack spacing={3} justify="center">
          <Box w="10" h="px" bg="gold.500" opacity={0.6} />
          <Text
            fontFamily="heading"
            fontSize="xs"
            color="gold.500"
            letterSpacing="0.25em"
          >
            ✦
          </Text>
          <Box w="10" h="px" bg="gold.500" opacity={0.6} />
        </HStack>

        <VStack spacing={6} w="full">
          <BlockTitle>Parents</BlockTitle>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 10 }}
            w="full"
            pt={2}
          >
            {/* Ninongs */}
            <VStack spacing={3}>
              <Text
                fontFamily="heading"
                fontSize="xs"
                color="sage.400"
                textTransform="uppercase"
                letterSpacing="0.2em"
              >
                Groom
              </Text>
              <NameList names={parents.grooms} />
            </VStack>
            {/* Ninangs */}
            <VStack spacing={3}>
              <Text
                fontFamily="heading"
                fontSize="xs"
                color="sage.400"
                textTransform="uppercase"
                letterSpacing="0.2em"
              >
                Bride
              </Text>
              <NameList names={parents.bride} />
            </VStack>
          </SimpleGrid>
        </VStack>

        <SectionDivider />
        {/* ── PRINCIPAL SPONSORS ── */}
        <VStack spacing={6} w="full">
          <BlockTitle>Principal Sponsors</BlockTitle>
          <Tagline>
            To stand as principal witnesses to our exchange of vows
          </Tagline>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 10 }}
            w="full"
            pt={2}
          >
            {/* Ninongs */}
            <VStack spacing={3}>
              <Text
                fontFamily="heading"
                fontSize="xs"
                color="sage.400"
                textTransform="uppercase"
                letterSpacing="0.2em"
              >
                Ninongs
              </Text>
              <NameList names={principalSponsors.ninongs} />
            </VStack>
            {/* Ninangs */}
            <VStack spacing={3}>
              <Text
                fontFamily="heading"
                fontSize="xs"
                color="sage.400"
                textTransform="uppercase"
                letterSpacing="0.2em"
              >
                Ninangs
              </Text>
              <NameList names={principalSponsors.ninangs} />
            </VStack>
          </SimpleGrid>
        </VStack>

        <SectionDivider />

        {/* ── BEST MAN & MAID OF HONOR ── */}
        <VStack spacing={6} w="full">
          <Tagline>To assist us in our needs</Tagline>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 10 }}
            w="full"
          >
            <VStack spacing={3}>
              <Text
                fontFamily="heading"
                fontSize={{ base: "lg", md: "xl" }}
                color="sage.800"
                fontWeight="300"
                letterSpacing="0.06em"
              >
                Best Man
              </Text>
              <Box w="10" h="px" bg="sage.200" mx="auto" />
              <Text
                color="sage.700"
                fontSize={{ base: "sm", md: "md" }}
                fontFamily="heading"
                fontWeight="300"
              >
                {bestMan}
              </Text>
            </VStack>
            <VStack spacing={3}>
              <Text
                fontFamily="heading"
                fontSize={{ base: "lg", md: "xl" }}
                color="sage.800"
                fontWeight="300"
                letterSpacing="0.06em"
              >
                Maid of Honor
              </Text>
              <Box w="10" h="px" bg="sage.200" mx="auto" />
              <Text
                color="sage.700"
                fontSize={{ base: "sm", md: "md" }}
                fontFamily="heading"
                fontWeight="300"
              >
                {maidOfHonor}
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>

        <SectionDivider />

        {/* ── SECONDARY SPONSORS ── */}
        <VStack spacing={6} w="full">
          <BlockTitle>Secondary Sponsors</BlockTitle>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            w="full"
            pt={2}
          >
            {secondarySponsors.map((sponsor) => (
              <VStack key={sponsor.label} spacing={3}>
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "lg", md: "xl" }}
                  color="sage.800"
                  fontWeight="300"
                  letterSpacing="0.06em"
                >
                  {sponsor.label}
                </Text>
                <Box w="8" h="px" bg="sage.200" mx="auto" />
                <Tagline>{sponsor.tagline}</Tagline>
                <NameList names={sponsor.names} />
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        <SectionDivider />

        {/* ── GROOMSMEN & BRIDESMAIDS ── */}
        <VStack spacing={6} w="full">
          <Tagline>To guide us in our way</Tagline>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 10 }}
            w="full"
          >
            <VStack spacing={3}>
              <Text
                fontFamily="heading"
                fontSize={{ base: "lg", md: "xl" }}
                color="sage.800"
                fontWeight="300"
                letterSpacing="0.06em"
              >
                Groomsmen
              </Text>
              <Box w="10" h="px" bg="sage.200" mx="auto" />
              <NameList names={groomsmen} />
            </VStack>
            <VStack spacing={3}>
              <Text
                fontFamily="heading"
                fontSize={{ base: "lg", md: "xl" }}
                color="sage.800"
                fontWeight="300"
                letterSpacing="0.06em"
              >
                Bridesmaids
              </Text>
              <Box w="10" h="px" bg="sage.200" mx="auto" />
              <NameList names={bridesmaids} />
            </VStack>
          </SimpleGrid>
        </VStack>

        <SectionDivider />

        {/* ── BEARERS ── */}
        <VStack spacing={6} w="full">
          <Tagline>To carry our symbols of love, treasure, and faith</Tagline>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            w="full"
            pt={2}
          >
            {bearers.map((bearer) => (
              <VStack key={bearer.label} spacing={3}>
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "lg", md: "xl" }}
                  color="sage.800"
                  fontWeight="300"
                  letterSpacing="0.06em"
                >
                  {bearer.label}
                </Text>
                <Box w="8" h="px" bg="sage.200" mx="auto" />
                <Text
                  color="sage.700"
                  fontSize={{ base: "sm", md: "md" }}
                  fontFamily="heading"
                  fontWeight="300"
                >
                  {bearer.name}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        <SectionDivider />

        {/* ── FLOWER GIRLS ── */}
        <VStack spacing={4} w="full">
          <Text
            fontFamily="heading"
            fontSize={{ base: "lg", md: "xl" }}
            color="sage.800"
            fontWeight="300"
            letterSpacing="0.06em"
          >
            Flower Girls
          </Text>
          <Box
            w="12"
            h="px"
            bgGradient="linear(to-r, transparent, gold.500, transparent)"
            mx="auto"
          />
          <NameList names={flowerGirls} />
        </VStack>
      </VStack>
    </Section>
  );
}

export default EntourageSection;
