import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', // soft gold for the primary color
    },
    secondary: {
      main: '#4E3629', // brown for secondary elements
    },
    background: {
      paper: '#FFFFFF', // white for paper background
      default: '#F5F5DC', // light beige for the default background
    },
    text: {
      primary: '#4E3629', // brown for text
      secondary: '#D4AF37', // soft gold for secondary text or accents
    },
  },
});

export default theme;
