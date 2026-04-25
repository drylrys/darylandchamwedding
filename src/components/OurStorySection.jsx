import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Section from "./Section";

const storyPhotos = [
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80"
];

function OurStorySection() {
  return (
    <Section
      id="story"
      eyebrow="Our Story"
      title="A Love Built on Grace"
      description="From quiet beginnings to a shared promise forever."
      bg="white"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, md: 12 }}
        alignItems="center"
      >
        <VStack spacing={5} align="stretch" maxW="2xl">
          <Box>
            <Text
              color="sage.700"
              textTransform="uppercase"
              letterSpacing="0.14em"
              fontSize="xs"
              fontWeight="semibold"
              mb={3}
            >
              Our Journey
            </Text>
            <Text
              color="sage.800"
              lineHeight="tall"
              fontSize={{ base: "md", md: "lg" }}
            >
              What started as a simple conversation became the kind of love that
              feels like home. Through every season, we found joy in the little
              moments and strength in one another.
            </Text>
          </Box>

          <Text
            color="sage.800"
            lineHeight="tall"
            fontSize={{ base: "md", md: "lg" }}
          >
            We have prayed, laughed, and grown side by side, and now we are
            ready to begin our next chapter as husband and wife, surrounded by
            the people we cherish most.
          </Text>

          <Box pt={2}>
            <Text
              fontFamily="heading"
              fontSize={{ base: "xl", md: "2xl" }}
              color="sage.800"
            >
              A love story written with grace, faith, and forever in mind.
            </Text>
          </Box>
        </VStack>

        <Box
          position="relative"
          maxW={{ base: "100%", md: "460px" }}
          minH={{ base: "420px", md: "520px" }}
        >
          <Box
            position="absolute"
            top={{ base: 0, md: 6 }}
            left={{ base: 0, md: 0 }}
            w={{ base: "72%", md: "70%" }}
            borderRadius="3xl"
            overflow="hidden"
            boxShadow="xl"
            zIndex={1}
          >
            <Image
              src={storyPhotos[0]}
              alt="Romantic couple moment"
              loading="lazy"
              position="relative"
              display="block"
              w="full"
              h={{ base: "300px", md: "360px" }}
              objectFit="cover"
            />
          </Box>

          <Box
            position="absolute"
            right={{ base: 0, md: 0 }}
            bottom={{ base: 0, md: 0 }}
            w={{ base: "62%", md: "58%" }}
            borderRadius="3xl"
            overflow="hidden"
            boxShadow="xl"
            border="6px solid"
            borderColor="white"
            zIndex={2}
          >
            <Image
              src={storyPhotos[1]}
              alt="Couple portrait"
              loading="lazy"
              position="relative"
              display="block"
              w="full"
              h={{ base: "220px", md: "280px" }}
              objectFit="cover"
            />
          </Box>
          {/*  */}
        </Box>
      </SimpleGrid>
    </Section>
  );
}

export default OurStorySection;
