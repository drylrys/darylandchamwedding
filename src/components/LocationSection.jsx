import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
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
      <VStack
        spacing={{ base: 8, md: 10 }}
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 10 }}
        bg="linear-gradient(180deg, rgba(245,248,244,0.72) 0%, rgba(255,255,255,1) 100%)"
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
              Garden Venue
            </Text>
            <Box w="14" h="1px" bg="gold.500" opacity={0.75} />
          </HStack>
          <Text color="sage.700" textAlign="center" maxW="2xl" fontSize="sm">
            A fresh and romantic setting surrounded by greenery, light, and
            quiet elegance.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 10 }}
          alignItems="start"
          w="full"
        >
          <VStack align="flex-start" spacing={5} textAlign="left">
            <Text
              color="sage.700"
              textTransform="uppercase"
              letterSpacing="0.14em"
              fontSize="xs"
              fontWeight="semibold"
            >
              Wedding Venue
            </Text>

            <Text
              color="sage.800"
              lineHeight="tall"
              fontSize={{ base: 'md', md: 'lg' }}
            >
              Ceremony starts at <strong>3:00 PM</strong> and reception follows
              at <strong>5:30 PM</strong>.
            </Text>
            <Text
              color="sage.800"
              lineHeight="tall"
              fontSize={{ base: 'md', md: 'lg' }}
            >
              We look forward to celebrating with you in a lush garden setting
              at Oasis Manila. Please plan your trip ahead and allow extra
              travel time within the city.
            </Text>

            <Box>
              <Text
                fontFamily="heading"
                fontSize={{ base: 'xl', md: '2xl' }}
                color="sage.800"
              >
                An intimate garden celebration in the heart of Manila.
              </Text>
            </Box>

            <HStack spacing={3} pt={1}>
              <Button
                as="a"
                href="https://maps.google.com/?q=Oasis+Manila+Philippines"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                colorScheme="sage"
                rightIcon={<ExternalLinkIcon />}
                _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
              >
                Open in Maps
              </Button>
            </HStack>
          </VStack>

          <VStack spacing={5} align="stretch">
            <Box position="relative">
              <Image
                src={venuePhoto}
                alt="Garden wedding venue inspiration"
                borderRadius="3xl"
                w="full"
                h={{ base: '280px', md: '360px' }}
                objectFit="cover"
                boxShadow="xl"
              />
              <Box
                position="absolute"
                left={{ base: 4, md: 6 }}
                bottom={{ base: 4, md: 6 }}
                px={4}
                py={3}
                bg="rgba(255,255,255,0.9)"
                backdropFilter="blur(6px)"
                borderRadius="2xl"
                border="1px solid"
                borderColor="whiteAlpha.700"
                boxShadow="md"
              >
                <Text
                  fontFamily="heading"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="black"
                >
                  Oasis Manila
                </Text>
                <Text color="sage.700" fontSize="sm">
                  Garden Wedding Venue
                </Text>
              </Box>
            </Box>

            <Box
              borderRadius="2xl"
              border="1px solid"
              borderColor="sage.200"
              overflow="hidden"
              bg="white"
              boxShadow="md"
              transition="all .35s ease"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
            >
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
            </Box>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Section>
  );
}

export default LocationSection;
