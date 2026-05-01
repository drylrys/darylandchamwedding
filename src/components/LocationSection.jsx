import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Section from './Section';

const venuePhoto =
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80';

function LocationSection() {
  return (
    <Section
      id="location"
      eyebrow="Location"
      title="Oasis Manila"
      description="A romantic garden wedding setting in Manila, Philippines"
      bg="white"
    >
      <VStack spacing={{ base: 12, md: 16 }} maxW="5xl" mx="auto" w="full">
        {/* ── Ornament + tagline ── */}
        <VStack spacing={3} textAlign="center">
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
          <Text color="sage.500" fontSize="sm" fontStyle="italic">
            A fresh and romantic setting surrounded by greenery, light, and
            quiet elegance.
          </Text>
        </VStack>

        {/* ── Two-column layout ── */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, md: 14 }}
          alignItems="start"
          w="full"
        >
          {/* Left — venue details */}
          <VStack align="flex-start" spacing={7}>
            {/* Venue name block */}
            <VStack align="flex-start" spacing={1}>
              <Text
                fontSize="xs"
                color="sage.400"
                letterSpacing="0.2em"
                textTransform="uppercase"
              >
                Wedding Venue
              </Text>
              <Text
                fontFamily="heading"
                fontSize={{ base: '2xl', md: '3xl' }}
                color="sage.800"
                fontWeight="300"
                letterSpacing="0.04em"
              >
                Oasis Manila
              </Text>
              <Box
                w="14"
                h="px"
                bgGradient="linear(to-r, gold.500, transparent)"
              />
            </VStack>

            {/* Time rows */}
            <VStack align="stretch" spacing={0} w="full">
              <HStack
                justify="space-between"
                borderBottom="1px solid"
                borderColor="sage.100"
                py={3}
              >
                <Text
                  fontSize="xs"
                  color="sage.400"
                  letterSpacing="0.15em"
                  textTransform="uppercase"
                >
                  Ceremony
                </Text>
                <Text
                  fontFamily="heading"
                  fontWeight="300"
                  color="sage.800"
                  fontSize="md"
                >
                  3:00 PM
                </Text>
              </HStack>
              <HStack
                justify="space-between"
                borderBottom="1px solid"
                borderColor="sage.100"
                py={3}
              >
                <Text
                  fontSize="xs"
                  color="sage.400"
                  letterSpacing="0.15em"
                  textTransform="uppercase"
                >
                  Reception
                </Text>
                <Text
                  fontFamily="heading"
                  fontWeight="300"
                  color="sage.800"
                  fontSize="md"
                >
                  5:30 PM
                </Text>
              </HStack>
              <HStack justify="space-between" py={3}>
                <Text
                  fontSize="xs"
                  color="sage.400"
                  letterSpacing="0.15em"
                  textTransform="uppercase"
                >
                  Date
                </Text>
                <Text
                  fontFamily="heading"
                  fontWeight="300"
                  color="sage.800"
                  fontSize="md"
                >
                  March 7, 2027 · Saturday
                </Text>
              </HStack>
            </VStack>

            {/* Pull quote */}
            <Text
              fontFamily="heading"
              fontSize={{ base: 'lg', md: 'xl' }}
              color="sage.700"
              fontWeight="300"
              fontStyle="italic"
              lineHeight="tall"
              borderLeft="2px solid"
              borderColor="gold.500"
              pl={4}
            >
              An intimate garden celebration in the heart of Manila.
            </Text>

            {/* Maps link — flat text link, no button */}
            <Link
              href="https://maps.google.com/?q=Oasis+Manila+Philippines"
              target="_blank"
              rel="noopener noreferrer"
              color="sage.600"
              fontSize="sm"
              letterSpacing="0.08em"
              textTransform="uppercase"
              _hover={{ color: 'gold.500', textDecoration: 'none' }}
              transition="color .2s"
              display="inline-flex"
              alignItems="center"
              gap={1.5}
            >
              Open in Google Maps <ExternalLinkIcon boxSize={3} />
            </Link>
          </VStack>

          {/* Right — image + map */}
          <VStack spacing={5} align="stretch">
            {/* Venue photo — no card, no shadow, no border-radius */}
            <Box position="relative" overflow="hidden">
              <Image
                src={venuePhoto}
                alt="Garden wedding venue inspiration"
                w="full"
                h={{ base: '260px', md: '320px' }}
                objectFit="cover"
                transition="transform .5s ease"
                _hover={{ transform: 'scale(1.03)' }}
              />
              {/* Minimal caption overlay — just text, no frosted card */}
              <Box
                position="absolute"
                left={0}
                bottom={0}
                w="full"
                px={5}
                py={3}
                bgGradient="linear(to-t, rgba(0,0,0,0.45), transparent)"
              >
                <Text
                  fontFamily="heading"
                  fontSize="lg"
                  color="white"
                  fontWeight="300"
                  letterSpacing="0.06em"
                >
                  Oasis Manila
                </Text>
                <Text
                  color="whiteAlpha.800"
                  fontSize="xs"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                >
                  Garden Wedding Venue
                </Text>
              </Box>
            </Box>

            {/* Map embed — no card border/shadow/radius */}
            <AspectRatio ratio={4 / 3}>
              <Box
                as="iframe"
                title="Oasis Manila"
                src="https://maps.google.com/maps?q=Oasis%20Manila%20Philippines&t=&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                border="0"
              />
            </AspectRatio>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Section>
  );
}

export default LocationSection;
