import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';

function getTimeRemaining(targetDate) {
  const total = targetDate.getTime() - Date.now();
  const safeTotal = Math.abs(total);

  const days = Math.floor(safeTotal / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeTotal / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safeTotal / (1000 * 60)) % 60);
  const seconds = Math.floor((safeTotal / 1000) % 60);

  return { total, days, hours, minutes, seconds, isAfterWedding: total <= 0 };
}

function TimeBlock({ value, label, withDivider = false }) {
  return (
    <Box position="relative" textAlign="center">
      <VStack minW={{ base: '64px', md: '88px' }} spacing={0}>
        <Text
          fontSize={{ base: '3.2rem', md: '4.8rem' }}
          fontWeight="300"
          color="sage.800"
          lineHeight="1"
          letterSpacing="-0.02em"
          fontVariantNumeric="tabular-nums"
          fontFamily="heading"
        >
          {String(value).padStart(2, '0')}
        </Text>
        <Box
          w="6"
          h="1px"
          bg="gold.500"
          opacity={0.6}
          mx="auto"
          mt={2}
          mb={1.5}
        />
        <Text
          fontSize={{ base: '9px', md: '10px' }}
          textTransform="uppercase"
          letterSpacing="0.22em"
          color="sage.600"
          fontWeight="semibold"
        >
          {label}
        </Text>
      </VStack>
      {withDivider && (
        <Text
          position="absolute"
          right={{ base: '-10px', md: '-14px' }}
          top="30%"
          transform="translateY(-50%)"
          color="sage.300"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="thin"
          lineHeight="1"
          userSelect="none"
        >
          ·
        </Text>
      )}
    </Box>
  );
}

function CountdownTimer() {
  const targetDate = useMemo(() => new Date('2027-03-07T15:00:00+08:00'), []);
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const blocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <VStack spacing={{ base: 3, md: 4 }}>
      <HStack spacing={3} justify="center">
        <Box w={{ base: '10', md: '14' }} h="1px" bg="gold.500" opacity={0.7} />
        <Text
          fontSize={{ base: '10px', md: 'xs' }}
          textTransform="uppercase"
          letterSpacing="0.16em"
          color="sage.700"
          fontWeight="semibold"
        >
          {timeLeft.isAfterWedding ? 'Since We Said I Do' : 'Countdown to I Do'}
        </Text>
        <Box w={{ base: '10', md: '14' }} h="1px" bg="gold.500" opacity={0.7} />
      </HStack>

      <HStack spacing={{ base: 3, md: 6 }} justify="center" flexWrap="wrap">
        {blocks.map((item, index) => (
          <TimeBlock
            key={item.label}
            value={item.value}
            label={item.label}
            withDivider={index < blocks.length - 1}
          />
        ))}
      </HStack>
    </VStack>
  );
}

export default CountdownTimer;
