import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EF9595', // primary color
    },
    secondary: {
      main: '#EFB495', // secondary color
    },
    background: {
      paper: '#EFD595', // background color for paper (cards, modals)
      default: '#EBEF95', // default background color
    },
  },
});

export default theme;
