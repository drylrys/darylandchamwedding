import { Box, Image, SimpleGrid } from '@chakra-ui/react';
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
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
        {photos.map((src, index) => (
          <Box
            key={src}
            borderRadius="xl"
            overflow="hidden"
            bg="white"
            border="1px solid"
            borderColor="sage.100"
          >
            <Image
              src={src}
              alt={`Daryl and Cham memory ${index + 1}`}
              w="full"
              h={{ base: '140px', md: '220px' }}
              objectFit="cover"
              transition="transform .3s ease"
              _hover={{ transform: 'scale(1.04)' }}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default GallerySection;
