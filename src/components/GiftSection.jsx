import { Box, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Section from './Section';

const giftPhoto =
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80';

function GiftSection() {
  return (
    <Section
      id="gift"
      eyebrow="Gift Note"
      title="Your Presence Is the Greatest Gift"
      description="Your love, prayers, and presence are more than enough. If you would still like to give a gift, a small monetary blessing would be sincerely appreciated."
    >
      <VStack spacing={{ base: 10, md: 14 }} maxW="5xl" mx="auto" w="full">
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
          spacing={{ base: 10, md: 14 }}
          alignItems="center"
          w="full"
        >
          {/* Image — no border-radius, no shadow */}
          <Box overflow="hidden">
            <Image
              src={giftPhoto}
              alt="Gift note visual"
              w="full"
              h={{ base: '260px', md: '380px' }}
              objectFit="cover"
              transition="transform .5s ease"
              _hover={{ transform: 'scale(1.03)' }}
              display="block"
            />
          </Box>

          {/* Text content */}
          <VStack align="flex-start" spacing={6}>
            <VStack align="flex-start" spacing={1}>
              <Text
                fontSize="xs"
                color="sage.400"
                letterSpacing="0.2em"
                textTransform="uppercase"
              >
                With Gratitude
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
              Your presence at our wedding is the greatest gift we could ask
              for. Sharing this joyful and meaningful day with the people we
              love most is already more than enough for us.
            </Text>

            <Text
              color="sage.600"
              lineHeight="tall"
              fontSize={{ base: 'sm', md: 'md' }}
            >
              If you would like to bless us further, a small monetary gift would
              be warmly appreciated as we begin our life together as husband and
              wife.
            </Text>

            {/* Pull quote — gold left border only, no bg fill */}
            <Box borderLeft="2px solid" borderColor="gold.500" pl={4} py={1}>
              <Text
                fontFamily="heading"
                fontSize={{ base: 'lg', md: 'xl' }}
                color="sage.800"
                fontStyle="italic"
                fontWeight="300"
              >
                "Thank you for celebrating, praying, and rejoicing with us."
              </Text>
            </Box>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Section>
  );
}

export default GiftSection;
