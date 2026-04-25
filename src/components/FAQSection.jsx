import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Section from './Section';

const faqs = [
  {
    question: 'What time should I arrive?',
    answer:
      'Kindly arrive by 2:00 PM so you are comfortably seated before the 3:00 PM ceremony.',
  },
  {
    question: 'Is parking available at the venue?',
    answer:
      'Yes, on-site parking is available. Please come early as parking slots may be limited during peak hours.',
  },
  {
    question: 'What is the dress code?',
    answer:
      'Formal / Suit & Tie. Please avoid overly bright colors and follow the sage, black, and white palette when possible.',
  },
  {
    question: 'Can I bring a plus-one?',
    answer:
      'Due to limited capacity, plus-ones are by invitation only and should be indicated on your RSVP.',
  },
];

function FAQSection() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Helpful Information"
      description="Everything you may need before the big day."
      bg="white"
    >
      <VStack
        spacing={{ base: 6, md: 8 }}
        maxW="4xl"
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
              fontSize={{ base: 'lg', md: 'xl' }}
              color="sage.800"
              letterSpacing="0.08em"
            >
              Frequently Asked Questions
            </Text>
            <Box w="14" h="1px" bg="gold.500" opacity={0.75} />
          </HStack>
          <Text color="sage.700" textAlign="center" maxW="2xl" fontSize="sm">
            A few helpful notes for our guests before the celebration.
          </Text>
        </VStack>

        <Accordion allowMultiple w="full">
          {faqs.map((item) => (
            <AccordionItem
              key={item.question}
              border="none"
              borderBottom="1px solid"
              borderColor="rgba(213, 225, 210, 0.9)"
            >
              <h3>
                <AccordionButton
                  py={{ base: 5, md: 6 }}
                  px={{ base: 0, md: 1 }}
                  _hover={{ bg: 'transparent', color: 'sage.700' }}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight="semibold"
                    color="black"
                    fontFamily="heading"
                    fontSize={{ base: 'lg', md: 'xl' }}
                  >
                    {item.question}
                  </Box>
                  <AccordionIcon color="sage.700" fontSize="xl" />
                </AccordionButton>
              </h3>
              <AccordionPanel px={{ base: 0, md: 1 }} pb={6}>
                <Text color="sage.800" lineHeight="tall" maxW="3xl">
                  {item.answer}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Section>
  );
}

export default FAQSection;
