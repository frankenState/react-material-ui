import React, { Fragment } from 'react';

import MessageNotif from './MessageNotif';
import BellNotif from './BellNotif';
import SearchWrap from './SearchWrap';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardTab from '@material-ui/icons/KeyboardTab';

import Avatar from '@material-ui/core/Avatar';

import Grid from '@material-ui/core/Grid';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  right: {
    marginLeft: theme.spacing(1),
  },
  top: {
    marginTop: theme.spacing(2),
  }
}));
// https://material-ui.com/customization/components/#overriding-styles-with-classes
// https://material-ui.com/api/badge/
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#263238',
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


export default function Header() {
  const classes = useStyles();

  return (
    <Fragment>

      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                React Dashboard
              </Typography>
              
              <Box display="flex">

                  <SearchWrap className={classes.top} />

                  <BellNotif className={classes.top} />

                  <MessageNotif className={classes.top} />
              
                  <Button color="inherit">
                    Logout 
                    <KeyboardTab className={classes.right} />
                  </Button>
              
              </Box>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    </Fragment>
  );
}