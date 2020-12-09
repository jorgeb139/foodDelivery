import { createMuiTheme } from "@material-ui/core/styles";
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: amber[700]
    },
    secondary: {
        main: amber[300],
        dark: amber[500]
    },
  },
});

export default theme;