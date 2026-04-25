import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";

const giftPhoto =
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80";

function GiftSection() {
  return (
    <Section
      id="gift"
      eyebrow="Gift Note"
      title="Your Presence Is the Greatest Gift"
      description="Your love, prayers, and presence are more than enough. If you would still like to give a gift, a small monetary blessing would be sincerely appreciated."
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, md: 10 }}
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 10 }}
        bg="linear-gradient(180deg, rgba(245,248,244,0.72) 0%, rgba(255,255,255,1) 100%)"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="sage.100"
        alignItems="center"
      >
        <Box position="relative" maxW={{ base: "100%", md: "460px" }} mx="auto">
          <Image
            src={giftPhoto}
            alt="Gift note visual"
            borderRadius="3xl"
            w="full"
            h={{ base: "280px", md: "380px" }}
            objectFit="cover"
            boxShadow="xl"
          />
          <Box
            position="absolute"
            right={{ base: 4, md: -4 }}
            bottom={{ base: 4, md: -4 }}
            w={{ base: "88px", md: "110px" }}
            h={{ base: "88px", md: "110px" }}
            borderRadius="full"
            bg="rgba(184, 155, 94, 0.15)"
            border="1px solid"
            borderColor="rgba(184, 155, 94, 0.28)"
            backdropFilter="blur(4px)"
          />
        </Box>

        <VStack align="flex-start" spacing={5} maxW="2xl">
          <Text
            color="sage.700"
            textTransform="uppercase"
            letterSpacing="0.14em"
            fontSize="xs"
            fontWeight="semibold"
          >
            With Gratitude
          </Text>

          <Text
            color="sage.800"
            lineHeight="tall"
            fontSize={{ base: "md", md: "lg" }}
          >
            Your presence at our wedding is the greatest gift we could ask for.
            Sharing this joyful and meaningful day with the people we love most
            is already more than enough for us.
          </Text>

          <Text
            color="sage.800"
            lineHeight="tall"
            fontSize={{ base: "md", md: "lg" }}
          >
            If you would like to bless us further, a small monetary gift would
            be warmly appreciated as we begin our life together as husband and
            wife.
          </Text>

          <Box pt={1}>
            <Text
              fontFamily="heading"
              fontSize={{ base: "xl", md: "2xl" }}
              color="sage.800"
            >
              Thank you for celebrating, praying, and rejoicing with us.
            </Text>
          </Box>
        </VStack>
      </SimpleGrid>
    </Section>
  );
}

export default GiftSection;
