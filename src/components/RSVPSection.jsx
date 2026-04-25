import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import Section from "./Section";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/1H-Zn56Vl1SrLvdJGcrrDwekTKLyhmb4yZCTZXsLDC3g/edit";

function RSVPSection() {
  return (
    <Section
      id="rsvp"
      eyebrow="RSVP"
      title="Reserve Your Seat"
      description="Please complete our Google Form reservation by February 10, 2027."
      bg="white"
    >
      <VStack
        spacing={{ base: 7, md: 8 }}
        maxW="5xl"
        mx="auto"
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
              fontSize={{ base: "lg", md: "xl" }}
              color="sage.800"
              letterSpacing="0.08em"
            >
              RSVP Form
            </Text>
            <Box w="14" h="1px" bg="gold.500" opacity={0.75} />
          </HStack>
          <Text color="sage.800" textAlign="center" maxW="2xl">
            Kindly submit your response through our official Google Form.
          </Text>
        </VStack>

        <Button
          as="a"
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          w={{ base: "full", md: "auto" }}
          colorScheme="sage"
          px={8}
          _hover={{ transform: "translateY(-1px)", boxShadow: "md" }}
        >
          Open Google Form
        </Button>
        {/* 
        <Box
          w="full"
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="sage.100"
          overflow="hidden"
          boxShadow="md"
        >
          <AspectRatio ratio={16 / 10}>
            <Box
              as="iframe"
              title="Wedding RSVP Google Form"
              src={GOOGLE_FORM_URL}
              loading="lazy"
              border="0"
            />
          </AspectRatio>
        </Box> */}

        <Text
          fontSize="sm"
          color="sage.700"
          alignSelf="center"
          textAlign="center"
          maxW="2xl"
        >
          RSVP deadline: February 10, 2027 · Replace the form link with your
          live Google Form URL.
        </Text>
      </VStack>
    </Section>
  );
}

export default RSVPSection;
