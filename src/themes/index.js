import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import teal from '@material-ui/core/colors/teal';
import lightblue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Helvetica', '-apple-system', 'Noto Sans TC'].join(','),
    h1: {
      fontSize: '1rem',
      fontFamily: 'Rubik Mono One',
      lineHeight: 0.9,
    },
    h2: {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.8rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  palette: {
    primary: {
      main: '#000000',
    },
    warning: {
      main: amber[400],
    },
    success: {
      main: teal[400],
    },
    info: {
      main: lightblue[400],
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
