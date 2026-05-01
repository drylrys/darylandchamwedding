import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import Section from './Section';

const palette = [
  { label: 'Sage Green', bg: 'sage.300', border: 'transparent' },
  { label: 'Black', bg: 'black', border: 'transparent' },
  { label: 'White', bg: 'white', border: 'sage.200' },
];

function EntourageBannerSection() {
  return (
    <Section
      id="entourage-banner"
      eyebrow="Wedding Party"
      title="Entourage Motif & Styling"
      description="A quick guide to keep everyone's look coordinated and elegant."
    >
      <Box
        maxW="4xl"
        mx="auto"
        position="relative"
        borderRadius="3xl"
        overflow="hidden"
        bgGradient="linear(to-br, sage.50, #f0f5ef, #fdfcf8)"
        border="1px solid"
        borderColor="sage.100"
        boxShadow="lg"
        p={{ base: 8, md: 14 }}
      >
        {/* Decorative background circles */}
        <Box
          position="absolute"
          top="-50px"
          right="-50px"
          w="200px"
          h="200px"
          borderRadius="full"
          bg="rgba(164,188,159,0.15)"
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="-40px"
          left="-40px"
          w="160px"
          h="160px"
          borderRadius="full"
          bg="rgba(184,155,94,0.1)"
          pointerEvents="none"
        />

        <VStack spacing={7} position="relative" zIndex={1} textAlign="center">
          <HStack spacing={3} justify="center">
            <Box w="12" h="1px" bg="gold.500" opacity={0.65} />
            <Text color="gold.500" fontSize="lg" lineHeight="1">
              ✦
            </Text>
            <Box w="12" h="1px" bg="gold.500" opacity={0.65} />
          </HStack>

          {/* Color palette swatches */}
          <HStack spacing={8} justify="center" flexWrap="wrap">
            {palette.map((item) => (
              <VStack key={item.label} spacing={2.5}>
                <Box
                  w={{ base: '48px', md: '58px' }}
                  h={{ base: '48px', md: '58px' }}
                  borderRadius="full"
                  bg={item.bg}
                  border="2px solid"
                  borderColor={item.border}
                  boxShadow="0 4px 14px rgba(0,0,0,0.12)"
                />
                <Text
                  fontSize="xs"
                  color="sage.700"
                  fontWeight="semibold"
                  letterSpacing="0.08em"
                >
                  {item.label}
                </Text>
              </VStack>
            ))}
          </HStack>

          <Text
            color="sage.800"
            textAlign="center"
            maxW="lg"
            lineHeight="tall"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            Bridesmaids in sage green dresses, groomsmen in black suits with
            white shirts, and a formal suit-and-tie finish for the full
            entourage.
          </Text>

          <Button
            as="a"
            href="#entourage"
            colorScheme="sage"
            size="lg"
            px={8}
            _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
          >
            View Entourage Theme
          </Button>
        </VStack>
      </Box>
    </Section>
  );
}

export default EntourageBannerSection;
