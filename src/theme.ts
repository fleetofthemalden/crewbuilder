import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#162B47',
    },
    secondary: {
      main: '#E7203B',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
