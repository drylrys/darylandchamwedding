import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import CountdownTimer from "./CountdownTimer";

function HeroSection() {
  return (
    <Box
      id="home"
      as="section"
      minH={{ base: "calc(100vh - 72px)", md: "90vh" }}
      display="flex"
      alignItems="center"
      bgGradient="linear(to-b, sage.50, white)"
      pt={{ base: 10, md: 16 }}
      pb={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: { base: "-120px", md: "-140px" },
        right: { base: "-100px", md: "-80px" },
        w: { base: "260px", md: "340px" },
        h: { base: "260px", md: "340px" },
        borderRadius: "full",
        bg: "rgba(164, 188, 159, 0.22)",
        filter: "blur(6px)"
      }}
      _after={{
        content: '""',
        position: "absolute",
        bottom: { base: "-120px", md: "-140px" },
        left: { base: "-100px", md: "-80px" },
        w: { base: "260px", md: "340px" },
        h: { base: "260px", md: "340px" },
        borderRadius: "full",
        bg: "rgba(184, 155, 94, 0.12)",
        filter: "blur(6px)"
      }}
    >
      {/* Extra decorative ring top-left */}
      <Box
        position="absolute"
        top={{ base: "60px", md: "80px" }}
        left={{ base: "20px", md: "60px" }}
        w={{ base: "80px", md: "120px" }}
        h={{ base: "80px", md: "120px" }}
        borderRadius="full"
        border="1px solid"
        borderColor="rgba(164, 188, 159, 0.3)"
        pointerEvents="none"
      />
      {/* Extra decorative ring bottom-right */}
      <Box
        position="absolute"
        bottom={{ base: "40px", md: "60px" }}
        right={{ base: "20px", md: "60px" }}
        w={{ base: "60px", md: "90px" }}
        h={{ base: "60px", md: "90px" }}
        borderRadius="full"
        border="1px solid"
        borderColor="rgba(184, 155, 94, 0.25)"
        pointerEvents="none"
      />
      {/* Gold dot accent top-right */}
      <Box
        position="absolute"
        top={{ base: "40px", md: "56px" }}
        right={{ base: "40px", md: "100px" }}
        w="8px"
        h="8px"
        borderRadius="full"
        bg="gold.400"
        opacity={0.55}
        pointerEvents="none"
      />
      {/* Sage dot accent bottom-left */}
      <Box
        position="absolute"
        bottom={{ base: "60px", md: "80px" }}
        left={{ base: "40px", md: "120px" }}
        w="6px"
        h="6px"
        borderRadius="full"
        bg="sage.400"
        opacity={0.6}
        pointerEvents="none"
      />
      <Container maxW="6xl" px={{ base: 5, md: 8 }}>
        <VStack
          spacing={{ base: 7, md: 10 }}
          textAlign="center"
          maxW="4xl"
          mx="auto"
          position="relative"
          zIndex={1}
          py={{ base: 8, md: 12 }}
        >
          <VStack spacing={3}>
            <HStack spacing={4} justify="center" align="center">
              <Box w="16" h="px" bg="gold.500" opacity={0.6} />
              {/* D&C monogram logo — replace src with your image */}
              <Image
                src="images/dc-logo.png"
                alt="D&C monogram"
                w={{ base: "52px", md: "62px" }}
                h={{ base: "52px", md: "62px" }}
                objectFit="contain"
                flexShrink={0}
              />
              <Box w="16" h="px" bg="gold.500" opacity={0.6} />
            </HStack>
            <Text
              fontSize="xs"
              color="sage.500"
              letterSpacing="0.22em"
              textTransform="uppercase"
            >
              Together with our families
            </Text>
          </VStack>

          <Heading
            fontSize={{ base: "4.2rem", sm: "5rem", md: "6.8rem", lg: "8rem" }}
            lineHeight="0.95"
            letterSpacing="0.015em"
            bgGradient="linear(to-b, #1f2a1f, #3d563e)"
            bgClip="text"
            position="relative"
            px={{ base: 1, md: 2 }}
            _after={{
              content: '""',
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: { base: "-14px", md: "-16px" },
              w: { base: "100px", md: "140px" },
              h: "1px",
              bgGradient: "linear(to-r, transparent, gold.500, transparent)",
              opacity: 0.8
            }}
          >
            Daryl & Cham
          </Heading>

          <VStack spacing={2}>
            <Text
              fontFamily="heading"
              fontSize={{ base: "md", md: "lg" }}
              color="sage.800"
              fontWeight="300"
              letterSpacing="0.08em"
            >
              March 7, 2027 · Sunday
            </Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color="sage.500"
              letterSpacing="0.18em"
              textTransform="uppercase"
            >
              Oasis Manila · Garden Wedding
            </Text>
            <Box
              w="10"
              h="px"
              bgGradient="linear(to-r, transparent, gold.500, transparent)"
              mt={1}
            />
          </VStack>

          <CountdownTimer />

          <VStack spacing={3}>
            <Button
              as="a"
              href="#rsvp"
              size="lg"
              variant="outline"
              colorScheme="sage"
              px={10}
              borderWidth="1px"
              letterSpacing="0.12em"
              fontWeight="400"
              _hover={{
                bg: "sage.500",
                color: "white",
                borderColor: "sage.500"
              }}
              transition="all .25s"
            >
              RSVP Now
            </Button>
            <Text fontSize="xs" color="sage.400" letterSpacing="0.1em">
              Kindly reply by February 10, 2027
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default HeroSection;
