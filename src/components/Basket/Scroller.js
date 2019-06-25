import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import { MuiThemeProvider, createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles( theme => ({
	greenAvatar: {
		margin: theme.spacing(1),
		color: '#fff',
		backgroundColor: green[500],
	},
	container: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	appBar: {
		position: 'fixed',
		top:'auto',
		bottom: 0,
		left: '50%',
	}
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fafafa',
      main: '#263238',
      dark: '#757575',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#fafafa',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const Scroller = (props) => {

	const [  scrollY, setScrollY ] = useState(window.scrollY);

	const classes = useStyles();

	useEffect(() => {
		window.onscroll = () => {
			setScrollY(window.scrollY);
		};
	}, [])

  return (
    <MuiThemeProvider theme={theme}>
    	{ scrollY > 0? (
    		<div
    		className={classes.appBar}
	    	>
				<Grid
		    		container
		    		justify="center"
		    		alignItems="center"
		    		className={classes.container}
		    	>
			    	<Fab 
			    		onClick={() => window.scrollTo(0,0) }
			    		color="primary" 
			    		className="{classes.greenAvatar}">
			    		<ArrowUpward />
		    		</Fab>
		    	</Grid>
		    </div>
    	): <span></span> }
    </MuiThemeProvider>
  )
}

export default Scroller;