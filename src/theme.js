import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    sage: {
      50: '#f0f4ec',
      100: '#dce8d5',
      200: '#c2d5b8',
      300: '#a3be95',
      400: '#85a872',
      500: '#6b9154',
      600: '#527a3e',
      700: '#3d5e2e',
      800: '#2b4220',
      900: '#1a2c12',
    },
    gold: {
      500: '#b89b5e',
    },
  },
  fonts: {
    heading: "'Cormorant Garamond', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  styles: {
    global: {
      'html, body': {
        bg: 'sage.50',
        color: 'black',
        scrollBehavior: 'smooth',
      },
      '*::placeholder': {
        color: 'sage.600',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 'semibold',
      },
    },
  },
});

export default theme;
