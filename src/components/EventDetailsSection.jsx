import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import Section from './Section';

const timeline = [
  { time: '2:00 PM', event: 'Guest Arrival', label: 'Doors open' },
  { time: '3:00 PM', event: 'Ceremony', label: 'Exchange of vows' },
  { time: '4:00 PM', event: 'Photo Session', label: 'Garden portraits' },
  { time: '5:30 PM', event: 'Reception', label: 'Dinner & celebration' },
];

function EventDetailsSection() {
  return (
    <Section
      id="details"
      eyebrow="Event Details"
      title="Wedding Day Timeline"
      description="Please arrive early so we can begin the ceremony on time."
    >
      <VStack spacing={{ base: 10, md: 12 }} maxW="3xl" mx="auto" w="full">
        {/* Ornament */}
        <HStack spacing={3} justify="center">
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

        {/* Timeline rows */}
        <VStack align="stretch" spacing={0} w="full">
          {timeline.map((item, index) => (
            <HStack
              key={item.event}
              w="full"
              justify="space-between"
              align="center"
              py={{ base: 5, md: 6 }}
              borderBottom={
                index === timeline.length - 1 ? 'none' : '1px solid'
              }
              borderColor="sage.100"
            >
              {/* Time */}
              <Text
                fontFamily="heading"
                fontSize={{ base: 'xl', md: '2xl' }}
                color="sage.300"
                fontWeight="300"
                letterSpacing="0.04em"
                minW={{ base: '80px', md: '110px' }}
              >
                {item.time}
              </Text>

              {/* Dot */}
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="gold.500"
                opacity={0.5}
                flexShrink={0}
              />

              {/* Event + label */}
              <VStack align="flex-end" spacing={0.5} flex={1} pl={4}>
                <Text
                  fontFamily="heading"
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="sage.800"
                  fontWeight="300"
                  letterSpacing="0.04em"
                >
                  {item.event}
                </Text>
                <Text
                  fontSize="xs"
                  color="sage.400"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                >
                  {item.label}
                </Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Section>
  );
}

export default EventDetailsSection;
