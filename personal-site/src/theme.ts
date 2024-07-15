import { createTheme } from '@mui/material/styles';
import { orange, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#383b4a',
        },
        secondary: {
          main: '#a29b9e',
        },
      },
});

export default theme;