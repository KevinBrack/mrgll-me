import { createTheme } from '@mui/material/styles';

export const biteMe = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8BE9FD',
      dark: '#BD93F9',
    },
    background: {
      default: '#282A36',
      paper: '#44475A',
    },
    text: {
      primary: '#F8F8F2',
      secondary: '#6272A4',
    },
  },
  typography: {
    fontFamily: [
      'var(--font-geist-sans)',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});
