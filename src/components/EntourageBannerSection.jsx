import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import Section from './Section';

function EntourageBannerSection() {
  return (
    <Section
      id="entourage-banner"
      eyebrow="Wedding Party"
      title="Entourage Motif & Styling"
      description="A quick guide to keep everyone's look coordinated and elegant."
    >
      <VStack
        maxW="3xl"
        mx="auto"
        spacing={4}
        p={{ base: 6, md: 8 }}
        borderRadius="2xl"
        border="1px solid"
        borderColor="sage.100"
        bg="white"
        boxShadow="sm"
      >
        <Text color="sage.800" textAlign="center">
          Bridesmaids in sage green dresses, groomsmen in black suits with white
          shirts, and a formal suit-and-tie finish for the full entourage.
        </Text>
        <HStack>
          <Button
            as="a"
            href="#entourage"
            colorScheme="sage"
            size="lg"
            px={8}
            _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
          >
            View Entourage Theme
          </Button>
        </HStack>
      </VStack>
    </Section>
  );
}

export default EntourageBannerSection;
