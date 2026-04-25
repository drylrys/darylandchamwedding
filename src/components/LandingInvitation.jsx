import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function LandingInvitation() {
  return (
    <Box
      id="invitation"
      as="section"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-b, #f7faf6, #eef4ec)"
      pt={{ base: 20, md: 24 }}
      pb={{ base: 14, md: 16 }}
    >
      <Container maxW="5xl" px={{ base: 5, md: 8 }}>
        <Box position="relative" maxW="4xl" mx="auto" pt={{ base: 8, md: 10 }}>
          <Box
            position="absolute"
            left="0"
            right="0"
            bottom="0"
            top={{ base: 14, md: 16 }}
            bg="white"
            border="1px solid"
            borderColor="sage.200"
            borderRadius="3xl"
            boxShadow="xl"
          />

          <Box
            position="absolute"
            left="0"
            right="0"
            top="0"
            h={{ base: "120px", md: "150px" }}
            bgGradient="linear(to-b, #f8fbf7, #e6efe4)"
            border="1px solid"
            borderColor="sage.200"
            borderBottom="none"
            borderTopRadius="3xl"
            clipPath="polygon(0 0, 100% 0, 50% 100%)"
            zIndex={2}
          />

          <Box
            position="absolute"
            top={{ base: "96px", md: "116px" }}
            left="50%"
            transform="translateX(-50%)"
            w={{ base: "54px", md: "62px" }}
            h={{ base: "54px", md: "62px" }}
            borderRadius="full"
            bg="whiteAlpha.900"
            colorScheme="sage"
            display="grid"
            placeItems="center"
            fontFamily="heading"
            fontSize={{ base: "md", md: "lg" }}
            boxShadow="lg"
            border="3px solid"
            borderColor="white"
            zIndex={3}
          >
            <Image
              src="/dclogo1.png"
              alt="Decorative Element"
              w={{ base: "40px", md: "48px" }}
              h={{ base: "40px", md: "48px" }}
            />
          </Box>

          <VStack
            position="relative"
            zIndex={1}
            spacing={{ base: 6, md: 8 }}
            textAlign="center"
            mt={{ base: 20, md: 24 }}
            p={{ base: 7, md: 12 }}
            bg="rgba(255, 255, 255, 0.93)"
            // border="1px solid"
            borderColor="sage.100"
            // borderRadius="2xl"
            // boxShadow="md"
            maxW="3xl"
            mx="auto"
            backdropFilter="blur(4px)"
          >
            <Text
              textTransform="uppercase"
              letterSpacing="0.2em"
              color="sage.700"
              fontSize="xs"
              fontWeight="semibold"
            >
              You Are Invited
            </Text>

            <Heading
              size={{ base: "2xl", md: "4xl" }}
              lineHeight="1.08"
              color="black"
            >
              Join us as we celebrate our wedding day
            </Heading>

            <VStack spacing={2} maxW="3xl">
              <Text color="sage.800" fontStyle="italic">
                “Love is patient, love is kind. It does not envy, it does not
                boast, it is not proud... It always protects, always trusts,
                always hopes, always perseveres.”
              </Text>
              <Text color="sage.700" fontWeight="semibold">
                1 Corinthians 13:4–7
              </Text>
            </VStack>

            <Button
              as={RouterLink}
              to="/invitation"
              colorScheme="sage"
              size="lg"
              px={8}
              _hover={{ transform: "translateY(-1px)", boxShadow: "lg" }}
            >
              Open Invitation
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

export default LandingInvitation;
