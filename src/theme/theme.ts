import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#B7C396',
    },
    secondary: {
      main: '#BA9A91',
    },
    background: {
      default: '#FEFEFE',
      paper: '#EDECEC',
    },
    text: {
      primary: '#222222',
      secondary: '#4F4F4F',
    },
    divider: '#CCCCCC',
  },
});