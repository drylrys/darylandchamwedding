import { Box, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";

const sampleLooks = [
  {
    title: "Ladies Formal",
    caption: "Elegant soft-toned formalwear for a refined garden celebration.",
    image: "/images/women-guide.jpeg"
  },
  {
    title: "Gentlemen Suit & Tie",
    caption: "Classic black suit, crisp white shirt, and polished tailoring.",
    image: "/images/men-guide.jpeg"
  }
];

const attireGuide = [
  {
    title: "Overall",
    detail:
      "Formal attire. Suit & tie for gentlemen, elegant formal wear for ladies."
  },
  {
    title: "Bridesmaids",
    detail: "Sage green dresses in a coordinated and graceful tone."
  },
  {
    title: "Groomsmen",
    detail: "Black suits with white shirts for a timeless and polished look."
  }
];

// Colour swatches — no badge cards, just flat circles + label
const palette = [
  { label: "Sage Green", bg: "#85a872" },
  { label: "Black", bg: "#1a1a1a" },
  { label: "White", bg: "#f8f8f6", border: "#c2d5b8" }
];

function DressCodeSection() {
  return (
    <Section
      id="dresscode"
      eyebrow="Dress Code"
      title="Formal · Suit & Tie"
      description="An elegant palette inspired by sage green, black, and white."
    >
      <VStack spacing={{ base: 12, md: 16 }} maxW="4xl" mx="auto" w="full">
        {/* ── Colour palette ── */}
        <VStack spacing={5}>
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
          <HStack spacing={8} justify="center" flexWrap="wrap">
            {palette.map(({ label, bg, border }) => (
              <VStack key={label} spacing={2}>
                <Box
                  w="48px"
                  h="48px"
                  borderRadius="full"
                  bg={bg}
                  border={border ? `1px solid ${border}` : undefined}
                />
                <Text
                  fontSize="xs"
                  color="sage.500"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                >
                  {label}
                </Text>
              </VStack>
            ))}
          </HStack>
        </VStack>

        {/* ── Attire guide ── */}
        <VStack spacing={8} w="full">
          <VStack spacing={2} textAlign="center">
            <Text
              fontFamily="heading"
              fontSize={{ base: "xl", md: "2xl" }}
              color="sage.800"
              fontWeight="300"
              letterSpacing="0.06em"
            >
              Attire Guide
            </Text>
            <Box
              w="16"
              h="px"
              bgGradient="linear(to-r, transparent, gold.500, transparent)"
            />
            <Text color="sage.600" fontSize="sm" maxW="sm" mt={1}>
              Please dress in refined formalwear that complements our romantic
              garden wedding palette.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 0, md: 8 }}
            w="full"
          >
            {attireGuide.map((item, index) => (
              <VStack
                key={item.title}
                spacing={2}
                textAlign="center"
                borderBottom={{ base: "1px solid", md: "none" }}
                borderRight={{
                  base: "none",
                  md: index < attireGuide.length - 1 ? "1px solid" : "none"
                }}
                borderColor="sage.100"
                pb={{ base: 6, md: 0 }}
                mb={{ base: 6, md: 0 }}
                px={{ base: 0, md: 6 }}
              >
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "lg", md: "xl" }}
                  color="sage.800"
                  fontWeight="300"
                  letterSpacing="0.06em"
                >
                  {item.title}
                </Text>
                <Box w="8" h="px" bg="sage.200" mx="auto" />
                <Text color="sage.600" fontSize="sm" lineHeight="tall">
                  {item.detail}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* ── Sample looks ── */}
        <VStack spacing={6} w="full">
          <VStack spacing={1} textAlign="center">
            <Text
              fontSize="xs"
              color="sage.400"
              letterSpacing="0.2em"
              textTransform="uppercase"
            >
              Sample Looks
            </Text>
            <Box w="10" h="px" bg="sage.200" mx="auto" />
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
            {sampleLooks.map((look) => (
              <VStack key={look.title} spacing={3} align="stretch">
                <Image
                  src={look.image}
                  alt={look.title}
                  h={{ base: "240px", md: "280px" }}
                  w="full"
                  objectFit="cover"
                  transition="transform .35s ease"
                  _hover={{ transform: "scale(1.02)" }}
                />
                <VStack spacing={1} px={1}>
                  <Text
                    fontFamily="heading"
                    fontSize="md"
                    color="sage.800"
                    fontWeight="300"
                    letterSpacing="0.04em"
                  >
                    {look.title}
                  </Text>
                  <Text color="sage.500" fontSize="xs" textAlign="center">
                    {look.caption}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Section>
  );
}

export default DressCodeSection;
