import {
  Badge,
  Box,
  Divider,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Section from './Section';

const sampleLooks = [
  {
    title: 'Ladies Formal',
    caption: 'Elegant soft-toned formalwear for a refined garden celebration.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Gentlemen Suit & Tie',
    caption: 'Classic black suit, crisp white shirt, and polished tailoring.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sage-Inspired Palette',
    caption: 'Muted greens and formal neutrals to match the wedding aesthetic.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  },
];

const attireGuide = [
  {
    title: 'Overall',
    detail:
      'Formal attire. Suit & tie for gentlemen, elegant formal wear for ladies.',
  },
  {
    title: 'Bridesmaids',
    detail: 'Sage green dresses in a coordinated and graceful tone.',
  },
  {
    title: 'Groomsmen',
    detail: 'Black suits with white shirts for a timeless and polished look.',
  },
];

function DressCodeSection() {
  return (
    <Section
      id="dresscode"
      eyebrow="Dress Code"
      title="Formal · Suit & Tie"
      description="An elegant palette inspired by sage green, black, and white."
    >
      <HStack justify="center" spacing={3} flexWrap="wrap">
        <Badge
          px={3}
          py={1.5}
          borderRadius="full"
          bg="sage.200"
          color="sage.900"
        >
          Sage Green
        </Badge>
        <Badge px={3} py={1.5} borderRadius="full" bg="black" color="white">
          Black
        </Badge>
        <Badge
          px={3}
          py={1.5}
          borderRadius="full"
          bg="white"
          color="black"
          border="1px solid"
          borderColor="sage.200"
        >
          White
        </Badge>
      </HStack>

      <VStack
        spacing={{ base: 6, md: 8 }}
        maxW="5xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 10 }}
        bg="linear-gradient(180deg, rgba(245,248,244,0.7) 0%, rgba(255,255,255,1) 100%)"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="sage.100"
      >
        <VStack spacing={3}>
          <HStack spacing={3} justify="center">
            <Box w="14" h="1px" bg="gold.500" opacity={0.75} />
            <Text
              fontFamily="heading"
              fontSize={{ base: 'lg', md: 'xl' }}
              color="sage.800"
              letterSpacing="0.08em"
            >
              Attire Guide
            </Text>
            <Box w="14" h="1px" bg="gold.500" opacity={0.75} />
          </HStack>
          <Text color="sage.700" textAlign="center" maxW="2xl" fontSize="sm">
            Please dress in refined formalwear that complements our romantic
            garden wedding palette.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 6, md: 8 }}
          w="full"
        >
          {attireGuide.map((item, index) => (
            <VStack
              key={item.title}
              spacing={3}
              textAlign="center"
              align="stretch"
            >
              <Text
                color="black"
                fontWeight="semibold"
                fontFamily="heading"
                fontSize={{ base: 'lg', md: 'xl' }}
              >
                {item.title}
              </Text>
              <Box w="12" h="1px" bg="sage.300" mx="auto" />
              <Text color="sage.800" lineHeight="tall">
                {item.detail}
              </Text>
              {index < attireGuide.length - 1 && (
                <Divider
                  display={{ base: 'block', md: 'none' }}
                  pt={3}
                  borderColor="sage.100"
                />
              )}
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>

      <VStack spacing={4} align="stretch">
        <Text
          textAlign="center"
          color="sage.700"
          textTransform="uppercase"
          letterSpacing="0.14em"
          fontSize="xs"
          fontWeight="semibold"
        >
          Sample Looks
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          {sampleLooks.map((look) => (
            <VStack key={look.title} spacing={4} align="stretch">
              <Image
                src={look.image}
                alt={look.title}
                h={{ base: '240px', md: '280px' }}
                w="full"
                objectFit="cover"
                borderRadius="2xl"
                transition="transform .35s ease, box-shadow .35s ease"
                boxShadow="md"
                _hover={{ transform: 'translateY(-3px)', boxShadow: 'xl' }}
              />
              <VStack spacing={2} px={{ base: 1, md: 2 }}>
                <Text
                  color="black"
                  fontWeight="semibold"
                  fontFamily="heading"
                  fontSize="lg"
                >
                  {look.title}
                </Text>
                <Text color="sage.800" fontSize="sm" textAlign="center">
                  {look.caption}
                </Text>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Section>
  );
}

export default DressCodeSection;
