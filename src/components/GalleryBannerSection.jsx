import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Section from './Section';

const memoryPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    alt: 'Romantic pre-wedding portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
    alt: 'Couple holding hands',
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Elegant couple photo',
  },
];

function GalleryBannerSection() {
  return (
    <Section
      id="gallery-banner"
      eyebrow="Memories"
      title="View Our Gallery"
      description="See a curated collection of our favorite moments as we prepare for this special day."
      bg="white"
    >
      <VStack
        maxW="6xl"
        mx="auto"
        spacing={{ base: 8, md: 10 }}
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
              Moments We Treasure
            </Text>
            <Box w="14" h="1px" bg="gold.500" opacity={0.75} />
          </HStack>
          <Text color="sage.700" textAlign="center" maxW="2xl" fontSize="sm">
            A glimpse of the love, laughter, and quiet moments that led us here.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 5, md: 6 }}
          w="full"
        >
          {memoryPhotos.map((photo, index) => (
            <VStack key={photo.src} spacing={3} align="stretch">
              <Box
                position="relative"
                overflow="hidden"
                borderRadius="3xl"
                boxShadow="xl"
                _hover={{ '& img': { transform: 'scale(1.04)' } }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  w="full"
                  h={{ base: '260px', md: '320px' }}
                  objectFit="cover"
                  transition="transform .45s ease"
                />
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-t, rgba(0,0,0,0.28), rgba(0,0,0,0.04), transparent)"
                />
                <Box
                  position="absolute"
                  left={4}
                  bottom={4}
                  px={3}
                  py={1.5}
                  bg="rgba(255,255,255,0.9)"
                  borderRadius="full"
                  backdropFilter="blur(6px)"
                >
                  <Text
                    color="sage.800"
                    fontSize="xs"
                    fontWeight="semibold"
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                  >
                    Memory {index + 1}
                  </Text>
                </Box>
              </Box>
            </VStack>
          ))}
        </SimpleGrid>

        <Text color="sage.800" textAlign="center" maxW="2xl">
          Tap below to open the full gallery page and see more of our story in
          photos.
        </Text>

        <HStack>
          <Button
            as={RouterLink}
            to="/gallery"
            colorScheme="sage"
            size="lg"
            px={8}
            _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
          >
            View Gallery
          </Button>
        </HStack>
      </VStack>
    </Section>
  );
}

export default GalleryBannerSection;
