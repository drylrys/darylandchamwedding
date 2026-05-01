import { Box, Container, HStack, Text, VStack } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      py={16}
      bgGradient="linear(to-b, sage.50, white)"
      borderTop="1px solid"
      borderColor="sage.100"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: '-80px',
        left: '50%',
        transform: 'translateX(-50%)',
        w: '300px',
        h: '300px',
        borderRadius: 'full',
        bg: 'rgba(164, 188, 159, 0.1)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }}
    >
      <Container maxW="6xl" px={{ base: 5, md: 8 }}>
        <VStack spacing={5} position="relative">
          <HStack spacing={3} justify="center">
            <Box w="16" h="1px" bg="gold.500" opacity={0.55} />
            <Text color="gold.500" fontSize="lg" lineHeight="1">
              ✦
            </Text>
            <Box w="16" h="1px" bg="gold.500" opacity={0.55} />
          </HStack>

          <VStack spacing={1.5}>
            <HStack spacing={2} justify="center" align="center">
              <Text
                fontFamily="heading"
                fontSize={{ base: '3xl', md: '4xl' }}
                color="sage.800"
                letterSpacing="0.04em"
              >
                Daryl
              </Text>
              <Text
                color="gold.500"
                fontSize={{ base: '2xl', md: '3xl' }}
                lineHeight="1"
                px={1}
              >
                ♥
              </Text>
              <Text
                fontFamily="heading"
                fontSize={{ base: '3xl', md: '4xl' }}
                color="sage.800"
                letterSpacing="0.04em"
              >
                Cham
              </Text>
            </HStack>
            <Text color="sage.700" fontSize="sm" letterSpacing="0.1em">
              March 7, 2027 · Oasis Manila
            </Text>
            <Text
              color="sage.500"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.22em"
              fontWeight="semibold"
              pt={1}
            >
              #DarylAndCham2026
            </Text>
          </VStack>

          <Box w="20" h="1px" bg="sage.200" />

          <Text
            color="sage.400"
            fontSize="xs"
            textAlign="center"
            letterSpacing="0.06em"
          >
            Made with love · Celebrating our forever
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer;
