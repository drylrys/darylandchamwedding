import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Text,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '#home', type: 'section' },
  { label: 'Story', href: '#story', type: 'section' },
  { label: 'Details', href: '#details', type: 'section' },
  { label: 'Entourage', href: '#entourage', type: 'section' },
  { label: 'RSVP', href: '#rsvp', type: 'section' },
  { label: 'FAQ', href: '#faq', type: 'section' },
  { label: 'Gallery', href: '/gallery', type: 'route' },
];

function Navbar() {
  const location = useLocation();
  const isInvitationPage = location.pathname === '/invitation';
  const sectionIds = useMemo(
    () =>
      navItems
        .filter((item) => item.type === 'section')
        .map((item) => item.href.replace('#', '')),
    [],
  );
  const [activeSection, setActiveSection] = useState(
    isInvitationPage ? 'home' : 'gallery',
  );

  useEffect(() => {
    if (!isInvitationPage) {
      setActiveSection(location.pathname === '/gallery' ? 'gallery' : '');
      return undefined;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = sectionIds[0] || 'home';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) {
          return;
        }

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = id;
        }
      });

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (nearBottom && sectionIds.length > 0) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [isInvitationPage, location.pathname, sectionIds]);

  const getItemHref = (item) => {
    if (item.type === 'route') {
      return item.href;
    }

    if (isInvitationPage) {
      return item.href;
    }

    return `/invitation${item.href}`;
  };

  const isItemActive = (item) => {
    if (item.type === 'route') {
      return location.pathname === item.href;
    }

    return isInvitationPage && activeSection === item.href.slice(1);
  };

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      bg="rgba(245, 248, 244, 0.95)"
      borderBottom="1px solid"
      borderColor="sage.100"
      backdropFilter="blur(8px)"
    >
      <Container maxW="6xl" px={{ base: 4, md: 8 }}>
        <Flex h="72px" align="center" justify="space-between" gap={4}>
          <Text
            fontFamily="heading"
            fontSize={{ base: 'xl', md: '2xl' }}
            color="sage.800"
          >
            Daryl & Cham
          </Text>
          <HStack
            spacing={{ base: 2, md: 6 }}
            display={{ base: 'none', md: 'flex' }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                as={item.type === 'route' ? RouterLink : undefined}
                to={item.type === 'route' ? item.href : undefined}
                href={item.type === 'section' ? getItemHref(item) : undefined}
                position="relative"
                fontSize="sm"
                color={isItemActive(item) ? 'sage.800' : 'black'}
                fontWeight={isItemActive(item) ? 'semibold' : 'medium'}
                pb={1}
                transition="color .25s ease"
                _hover={{ color: 'sage.700', textDecoration: 'none' }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  height: '2px',
                  width: '100%',
                  bg: 'sage.600',
                  borderRadius: 'full',
                  transform: isItemActive(item) ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'center',
                  transition: 'transform .3s ease',
                }}
              >
                {item.label}
              </Link>
            ))}
            <Button
              as={RouterLink}
              to="/invitation#rsvp"
              size="sm"
              colorScheme="sage"
              variant="solid"
            >
              RSVP
            </Button>
          </HStack>
          <Button
            as={RouterLink}
            to="/invitation#rsvp"
            size="sm"
            colorScheme="sage"
            display={{ base: 'inline-flex', md: 'none' }}
          >
            RSVP
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
