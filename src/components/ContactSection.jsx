import { Box, Divider, HStack, Link, Text, VStack } from "@chakra-ui/react";
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
      <VStack spacing={0} maxW="lg" mx="auto" w="full">
        {/* Ornament */}
        <HStack spacing={3} justify="center" mb={8}>
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

        {/* Coordinator title */}
        <Text
          fontFamily="heading"
          fontSize={{ base: "sm", md: "md" }}
          color="sage.500"
          letterSpacing="0.2em"
          textTransform="uppercase"
          mb={1}
        >
          Wedding Coordinator
        </Text>
        <Text
          fontFamily="heading"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="sage.800"
          fontWeight="300"
          letterSpacing="0.04em"
          mb={6}
        >
          Ms. Andrea Reyes
        </Text>

        <Divider borderColor="sage.100" mb={6} />

        {/* Contact rows */}
        <VStack spacing={5} w="full" align="stretch">
          <HStack
            justify="space-between"
            w="full"
            borderBottom="1px solid"
            borderColor="sage.100"
            pb={4}
          >
            <Text
              fontSize="xs"
              color="sage.400"
              letterSpacing="0.15em"
              textTransform="uppercase"
            >
              Phone
            </Text>
            <Link
              href="tel:+639175550123"
              color="sage.800"
              fontSize={{ base: "md", md: "lg" }}
              fontFamily="heading"
              fontWeight="300"
              letterSpacing="0.03em"
              _hover={{ color: "gold.500", textDecoration: "none" }}
              transition="color .2s"
            >
              +63 917 555 0123
            </Link>
          </HStack>

          <HStack
            justify="space-between"
            w="full"
            borderBottom="1px solid"
            borderColor="sage.100"
            pb={4}
          >
            <Text
              fontSize="xs"
              color="sage.400"
              letterSpacing="0.15em"
              textTransform="uppercase"
            >
              Email
            </Text>
            <Link
              href="mailto:reyes.events@email.com"
              color="sage.800"
              fontSize={{ base: "sm", md: "md" }}
              fontFamily="heading"
              fontWeight="300"
              letterSpacing="0.03em"
              _hover={{ color: "gold.500", textDecoration: "none" }}
              transition="color .2s"
            >
              reyes.events@email.com
            </Link>
          </HStack>

          <HStack justify="space-between" w="full" pb={2}>
            <Text
              fontSize="xs"
              color="sage.400"
              letterSpacing="0.15em"
              textTransform="uppercase"
            >
              Hours
            </Text>
            <Text
              color="sage.700"
              fontSize={{ base: "sm", md: "md" }}
              fontFamily="heading"
              fontWeight="300"
            >
              Mon – Sat, 9 AM – 6 PM
            </Text>
          </HStack>
        </VStack>

        {/* Closing note */}
        <Box mt={10} textAlign="center">
          <Box w="16" h="px" bg="sage.200" mx="auto" mb={4} />
          <Text fontSize="sm" color="sage.500" fontStyle="italic">
            For urgent inquiries on the wedding day, please contact the
            coordinator directly.
          </Text>
        </Box>
      </VStack>
    </Section>
  );
}

export default ContactSection;
