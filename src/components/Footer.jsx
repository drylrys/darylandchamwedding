import { Box, Container, Text, VStack } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      as="footer"
      py={12}
      borderTop="1px solid"
      borderColor="sage.100"
      bg="white"
    >
      <Container maxW="6xl" px={{ base: 5, md: 8 }}>
        <VStack spacing={1}>
          <Text
            fontFamily="heading"
            fontSize={{ base: "2xl", md: "3xl" }}
            color="sage.800"
          >
            Daryl & Cham
          </Text>
          <Text color="sage.700" fontSize="sm">
            March 7, 2027 · Oasis Manila
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer;
