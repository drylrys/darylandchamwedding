import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    sage: {
      50: '#f5f8f4',
      100: '#e8efe6',
      200: '#d5e1d2',
      300: '#bfd1ba',
      400: '#a4bc9f',
      500: '#89a887',
      600: '#6f8d6c',
      700: '#567255',
      800: '#3d563e',
      900: '#263828',
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
