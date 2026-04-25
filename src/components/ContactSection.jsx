import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";

function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Need Assistance?"
      description="Our coordinator will be happy to help."
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
              Contact Information
            </Text>
            <Box w="14" h="1px" bg="gold.500" opacity={0.75} />
          </HStack>
          <Text color="sage.700" textAlign="center" maxW="2xl" fontSize="sm">
            If you need help with directions, RSVP, or schedule details, please
            contact our coordinator.
          </Text>
        </VStack>

        <VStack spacing={2.5} textAlign="center">
          <Text
            color="black"
            fontWeight="semibold"
            fontFamily="heading"
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Wedding Coordinator
          </Text>
          <Text color="sage.800" fontSize={{ base: "md", md: "lg" }}>
            Mr.Reyes
          </Text>
          <Text color="sage.800" fontSize={{ base: "md", md: "lg" }}>
            +63 917 555 0123
          </Text>
          <Text color="sage.800" fontSize={{ base: "md", md: "lg" }}>
            reyes.events@email.com
          </Text>
        </VStack>
      </VStack>
    </Section>
  );
}

export default ContactSection;
