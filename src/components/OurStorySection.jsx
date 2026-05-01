import { Box, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Section from './Section';

const storyPhotos = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
];

function OurStorySection() {
  return (
    <Section
      id="story"
      eyebrow="Our Story"
      title="A Love Built on Grace"
      description="From quiet beginnings to a shared promise forever."
      bg="white"
    >
      <VStack spacing={{ base: 12, md: 16 }} maxW="5xl" mx="auto" w="full">
        {/* Ornament */}
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

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, md: 16 }}
          alignItems="center"
        >
          {/* Text side */}
          <VStack spacing={6} align="flex-start">
            <VStack align="flex-start" spacing={1}>
              <Text
                fontSize="xs"
                color="sage.400"
                letterSpacing="0.2em"
                textTransform="uppercase"
              >
                Our Journey
              </Text>
              <Box w="10" h="px" bg="sage.200" />
            </VStack>

            <Text
              color="sage.700"
              lineHeight="tall"
              fontSize={{ base: 'md', md: 'lg' }}
              fontFamily="heading"
              fontWeight="300"
            >
              What started as a simple conversation became the kind of love that
              feels like home. Through every season, we found joy in the little
              moments and strength in one another.
            </Text>

            <Text
              color="sage.600"
              lineHeight="tall"
              fontSize={{ base: 'sm', md: 'md' }}
            >
              We have prayed, laughed, and grown side by side, and now we are
              ready to begin our next chapter as husband and wife, surrounded by
              the people we cherish most.
            </Text>

            {/* Pull quote — gold left border, no bg fill */}
            <Box borderLeft="2px solid" borderColor="gold.500" pl={4} py={1}>
              <Text
                fontFamily="heading"
                fontSize={{ base: 'lg', md: 'xl' }}
                color="sage.800"
                fontStyle="italic"
                fontWeight="300"
              >
                "A love story written with grace, faith, and forever in mind."
              </Text>
            </Box>
          </VStack>

          {/* Photo side — flat, no border-radius, no shadow, stacked offset layout */}
          <Box position="relative" minH={{ base: '380px', md: '480px' }}>
            {/* Primary photo — top-left, larger */}
            <Box
              position="absolute"
              top={0}
              left={0}
              w={{ base: '70%', md: '68%' }}
              overflow="hidden"
            >
              <Image
                src={storyPhotos[0]}
                alt="Romantic couple moment"
                w="full"
                h={{ base: '280px', md: '340px' }}
                objectFit="cover"
                display="block"
                transition="transform .5s ease"
                _hover={{ transform: 'scale(1.03)' }}
              />
            </Box>

            {/* Secondary photo — bottom-right, smaller */}
            <Box
              position="absolute"
              right={0}
              bottom={0}
              w={{ base: '58%', md: '55%' }}
              overflow="hidden"
              borderTop="3px solid white"
              borderLeft="3px solid white"
            >
              <Image
                src={storyPhotos[1]}
                alt="Couple portrait"
                w="full"
                h={{ base: '200px', md: '240px' }}
                objectFit="cover"
                display="block"
                transition="transform .5s ease"
                _hover={{ transform: 'scale(1.03)' }}
              />
            </Box>

            {/* Small gold accent line — bottom-left */}
            <Box
              position="absolute"
              bottom={{ base: '16px', md: '20px' }}
              left={0}
              w="32px"
              h="2px"
              bg="gold.500"
              opacity={0.5}
            />
          </Box>
        </SimpleGrid>
      </VStack>
    </Section>
  );
}

export default OurStorySection;
