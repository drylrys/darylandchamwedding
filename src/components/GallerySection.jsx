import { Box, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Section from './Section';

const photos = [
  'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0f0a6?auto=format&fit=crop&w=1200&q=80',
];

function GallerySection() {
  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title="Moments of Us"
      description="A few memories before we say 'I do'."
    >
      <VStack spacing={6} maxW="5xl" mx="auto" w="full">
        {/* Ornament */}
        <Box display="flex" alignItems="center" gap={3} justifyContent="center">
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
        </Box>

        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          spacing={{ base: 2, md: 3 }}
          w="full"
        >
          {photos.map((src, index) => (
            <Box
              key={src}
              overflow="hidden"
              position="relative"
              _hover={{
                '& .gallery-img': { transform: 'scale(1.06)' },
                '& .gallery-overlay': { opacity: 1 },
              }}
            >
              <Image
                className="gallery-img"
                src={src}
                alt={`Daryl and Cham memory ${index + 1}`}
                w="full"
                h={{ base: '160px', md: '240px' }}
                objectFit="cover"
                transition="transform .5s ease"
                display="block"
              />
              <Box
                className="gallery-overlay"
                position="absolute"
                inset="0"
                bgGradient="linear(to-t, rgba(31,42,31,0.55), transparent)"
                opacity={0}
                transition="opacity .35s ease"
                display="flex"
                alignItems="flex-end"
                p={{ base: 3, md: 4 }}
              >
                <Text
                  color="whiteAlpha.800"
                  fontSize="xs"
                  letterSpacing="0.18em"
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
      </VStack>
    </Section>
  );
}

export default GallerySection;
