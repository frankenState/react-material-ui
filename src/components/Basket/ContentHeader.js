import React from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( theme => ({
	root: {
		flexGrow: 1,
	}
}));


const ContentHeader = (props) => {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			
			<Toolbar>
				<Typography variant="h6">
					Dashboard
				</Typography>
			</Toolbar>
		</div>
	);
}

export default ContentHeader;
