import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles( theme => ({
	root: {
		margin: theme.spacing(2),
	},
	userImg: {
		width: 90,
		height: 90
	},
	name: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(0)
	}
}));



const UserData = (props) => {
  
  const classes = useStyles();

  return (
    <div>

    	<Grid container className={classes.root}>
    		<Grid item xs={4}>
    			<Avatar 
		    		src="https://www.w3schools.com/howto/img_avatar.png"
		    		className={classes.userImg}
		    	/>
    		</Grid>
    		<Grid 
    			item 
    			xs={8}
    		>
    			<Typography 
		    		variant="h6" 
		    		gutterBottom
		    		className={classes.name}
		    	>
				  @FrankenState
				</Typography>
				<Typography variant="body2">
					Web Developer
				</Typography>
    		</Grid>
    	</Grid>
	    
    </div>
  )
}

export default UserData;