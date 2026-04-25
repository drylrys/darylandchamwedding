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
          <VStack spacing={2}>
            <HStack spacing={3} justify="center">
              <Box w="14" h="1px" bg="gold.500" opacity={0.75} />
              <Image
                src="/dclogo1.png"
                alt="Decorative Element"
                w={{ base: "40px", md: "48px" }}
                h={{ base: "40px", md: "48px" }}
              />
              <Box w="14" h="1px" bg="gold.500" opacity={0.75} />
            </HStack>
            <Text color="sage.700" fontSize="sm">
              Together with our families
            </Text>
          </VStack>

          <Heading
            fontSize={{ base: "4.2rem", sm: "5rem", md: "6.8rem", lg: "8rem" }}
            lineHeight="0.95"
            letterSpacing="0.015em"
            bgGradient="linear(to-b, #1f2a1f, #3d563e)"
            bgClip="text"
            textShadow="0 10px 24px rgba(61, 86, 62, 0.12)"
            position="relative"
            px={{ base: 1, md: 2 }}
            _after={{
              content: '""',
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: { base: "-12px", md: "-14px" },
              w: { base: "120px", md: "170px" },
              h: "2px",
              bgGradient: "linear(to-r, transparent, gold.500, transparent)",
              opacity: 0.9
            }}
          >
            Daryl & Cham
          </Heading>

          <VStack spacing={1.5}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="sage.800"
              fontWeight="medium"
            >
              March 7, 2026 · Saturday
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color="sage.700">
              Oasis Manila · Garden Wedding
            </Text>
            <Box w="24" h="1px" bg="sage.300" mt={1} />
          </VStack>

          <CountdownTimer />

          <Button
            as="a"
            href="#rsvp"
            size="lg"
            colorScheme="sage"
            px={9}
            boxShadow="lg"
            _hover={{ transform: "translateY(-1px)", boxShadow: "lg" }}
          >
            RSVP Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default HeroSection;
