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
      <VStack spacing={{ base: 8, md: 10 }} maxW="3xl" mx="auto" w="full">
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

        <Accordion allowMultiple w="full">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.question}
              border="none"
              borderTop={index === 0 ? '1px solid' : 'none'}
              borderBottom="1px solid"
              borderColor="sage.100"
            >
              <h3>
                <AccordionButton
                  py={{ base: 5, md: 6 }}
                  px={0}
                  _hover={{ bg: 'transparent' }}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontFamily="heading"
                    fontWeight="300"
                    color="sage.800"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    letterSpacing="0.03em"
                  >
                    {item.question}
                  </Box>
                  <AccordionIcon color="gold.500" fontSize="lg" />
                </AccordionButton>
              </h3>
              <AccordionPanel px={0} pb={6}>
                <Text
                  color="sage.600"
                  lineHeight="tall"
                  fontSize={{ base: 'sm', md: 'md' }}
                >
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
