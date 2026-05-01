import {
  Box,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Link,
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
      <VStack maxW="5xl" mx="auto" spacing={{ base: 10, md: 14 }} w="full">
        {/* Ornament + tagline */}
        <VStack spacing={3}>
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
            A glimpse of the love, laughter, and quiet moments that led us here.
          </Text>
        </VStack>

        {/* Photo grid — flat, no card, varied heights */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 2, md: 3 }}
          w="full"
        >
          {memoryPhotos.map((photo, index) => (
            <Box
              key={photo.src}
              overflow="hidden"
              position="relative"
              _hover={{
                '& .banner-img': { transform: 'scale(1.05)' },
                '& .banner-overlay': { opacity: 1 },
              }}
            >
              <Image
                className="banner-img"
                src={photo.src}
                alt={photo.alt}
                w="full"
                h={{
                  base: '240px',
                  md: index === 1 ? '380px' : '300px',
                }}
                objectFit="cover"
                transition="transform .5s ease"
                display="block"
              />
              {/* Gradient overlay on hover */}
              <Box
                className="banner-overlay"
                position="absolute"
                inset="0"
                bgGradient="linear(to-t, rgba(31,42,31,0.5), transparent)"
                opacity={0}
                transition="opacity .35s ease"
                display="flex"
                alignItems="flex-end"
                p={5}
              >
                <Text
                  color="whiteAlpha.800"
                  fontSize="xs"
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                  fontFamily="heading"
                  fontWeight="300"
                >
                  Memory {index + 1}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* CTA — flat text link, no button */}
        <VStack spacing={2} textAlign="center">
          <Text color="sage.500" fontSize="sm">
            See more of our story in photos.
          </Text>
          <Link
            as={RouterLink}
            to="/gallery"
            color="sage.700"
            fontSize="sm"
            letterSpacing="0.14em"
            textTransform="uppercase"
            fontFamily="heading"
            fontWeight="300"
            _hover={{ color: 'gold.500', textDecoration: 'none' }}
            transition="color .2s"
            display="inline-flex"
            alignItems="center"
            gap={2}
          >
            View Full Gallery →
          </Link>
        </VStack>
      </VStack>
    </Section>
  );
}

export default GalleryBannerSection;
