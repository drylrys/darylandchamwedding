import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  bg = 'transparent',
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id={id}
      as="section"
      py={{ base: 16, md: 24 }}
      bg={bg}
      ref={sectionRef}
    >
      <Container maxW="6xl" px={{ base: 5, md: 8 }}>
        <VStack
          spacing={{ base: 8, md: 10 }}
          align="stretch"
          opacity={isVisible ? 1 : 0}
          transform={isVisible ? 'translateY(0px)' : 'translateY(14px)'}
          transition="opacity .65s ease, transform .65s ease"
        >
          {(eyebrow || title || description) && (
            <VStack
              align={{ base: 'flex-start', md: 'center' }}
              spacing={2}
              maxW="3xl"
              mx={{ md: 'auto' }}
            >
              {eyebrow && (
                <Text
                  textTransform="uppercase"
                  letterSpacing="0.18em"
                  fontSize="xs"
                  color="sage.700"
                  fontWeight="semibold"
                >
                  {eyebrow}
                </Text>
              )}
              {title && (
                <Heading
                  size={{ base: 'xl', md: '2xl' }}
                  textAlign={{ base: 'left', md: 'center' }}
                  color="black"
                >
                  {title}
                </Heading>
              )}
              {description && (
                <Text
                  color="sage.800"
                  textAlign={{ base: 'left', md: 'center' }}
                >
                  {description}
                </Text>
              )}
            </VStack>
          )}
          {children}
        </VStack>
      </Container>
    </Box>
  );
}

export default Section;
