import { Box, Circle, HStack, Text, VStack } from '@chakra-ui/react';
import Section from './Section';

const timeline = [
  { time: '2:00 PM', event: 'Guest Arrival' },
  { time: '3:00 PM', event: 'Ceremony' },
  { time: '4:00 PM', event: 'Photo Session' },
  { time: '5:30 PM', event: 'Reception' },
];

function EventDetailsSection() {
  return (
    <Section
      id="details"
      eyebrow="Event Details"
      title="Wedding Day Timeline"
      description="Please arrive early so we can begin the ceremony on time."
    >
      <VStack
        spacing={{ base: 6, md: 8 }}
        maxW="4xl"
        mx="auto"
        px={{ base: 5, md: 10 }}
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
              fontSize={{ base: 'lg', md: 'xl' }}
              color="sage.800"
              letterSpacing="0.08em"
            >
              Order of Events
            </Text>
            <Box w="14" h="1px" bg="gold.500" opacity={0.75} />
          </HStack>
          <Text color="sage.700" textAlign="center" maxW="2xl" fontSize="sm">
            A gentle flow of the celebration, from your arrival to the evening
            reception.
          </Text>
        </VStack>

        <VStack
          align="stretch"
          position="relative"
          spacing={0}
          px={{ base: 0, md: 4 }}
        >
          <Box
            position="absolute"
            top="14px"
            bottom="14px"
            left={{ base: '15px', md: '31px' }}
            w="1px"
            bg="sage.200"
          />
          {timeline.map((item, index) => (
            <HStack
              key={item.event}
              w="full"
              justify="space-between"
              px={{ base: 0, md: 2 }}
              py={{ base: 5, md: 6 }}
              align="flex-start"
              position="relative"
              borderBottom={
                index === timeline.length - 1 ? 'none' : '1px solid'
              }
              borderColor="rgba(213, 225, 210, 0.8)"
            >
              <HStack spacing={{ base: 4, md: 6 }} align="flex-start">
                <Circle
                  size="10px"
                  bg="sage.500"
                  mt="10px"
                  flexShrink={0}
                  boxShadow="0 0 0 7px var(--chakra-colors-white)"
                />
                <VStack spacing={1.5} align="flex-start">
                  <Text
                    color="black"
                    fontWeight="semibold"
                    fontSize={{ base: 'md', md: 'lg' }}
                    fontFamily="heading"
                    letterSpacing="0.02em"
                  >
                    {item.event}
                  </Text>
                  <Text
                    color="sage.700"
                    fontSize="sm"
                    display={{ base: 'block', md: 'none' }}
                    textTransform="uppercase"
                    letterSpacing="0.08em"
                  >
                    {item.time}
                  </Text>
                </VStack>
              </HStack>
              <Text
                color="sage.700"
                fontWeight="semibold"
                letterSpacing="0.12em"
                fontSize="xs"
                textTransform="uppercase"
                display={{ base: 'none', md: 'block' }}
                pt="5px"
              >
                {item.time}
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Section>
  );
}

export default EventDetailsSection;
