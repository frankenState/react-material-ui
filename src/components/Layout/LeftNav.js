import React, { Fragment } from 'react';

import UserData from '../Basket/UserData';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import MailOutline from '@material-ui/icons/MailOutline';
import Drafts from '@material-ui/icons/Drafts';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Block from '@material-ui/icons/Block';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
  	marginRight: theme.spacing(2),
  	color: '#424242'
  },
}));

// MailOutline
// Drafts
// DeleteOutline
// Block
const LeftNav = (props) => {

	const classes = useStyles();

  return (
    <div>
		<UserData />
		<br/>
		<List 
			component="nav" 
			className={classes.root}
		>
	      <ListItem button>
	      	<MailOutline className={classes.icon} />
	        <ListItemText primary="Inbox" />
	      </ListItem>
	      <Divider />
	      <ListItem button divider>
	      	<Drafts className={classes.icon} />
	        <ListItemText primary="Drafts" />
	      </ListItem>
	      <ListItem button>
	      	<DeleteOutline className={classes.icon} />
	        <ListItemText primary="Trash" />
	      </ListItem>
	      <Divider light />
	      <ListItem button>
	      	<Block className={classes.icon} />
	        <ListItemText primary="Spam" />
	      </ListItem>
	    </List>
    </div>
  )
}

export default LeftNav;