import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: "skyblue"
    },
    secondary: {
      main: green[500],
    },
    otherColor:{
        main:"#999"
    }
  },
});
