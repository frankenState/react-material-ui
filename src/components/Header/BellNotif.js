import React from 'react';

import Badge from '@material-ui/core/Badge';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import { green, purple } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  emailNotif: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
  },

}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ff5252',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ffd740',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});

const BellNotif = (props) => {

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Badge
        badgeContent={10}
        className={classes.emailNotif}
        color="primary"
      >
        <NotificationsNone />
      </Badge>
    </MuiThemeProvider>
  )
}

export default BellNotif;