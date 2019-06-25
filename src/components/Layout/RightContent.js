import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Scroller from '../Basket/Scroller';

const useStyles = makeStyles( theme => ({
	root: {
		backgroundColor: '#e3f2fd',
	},
  content: {
    height: '100vh'
  }
}));

const RightContent = (props) => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
          
      </div>
      <Scroller />
    </div>
  )
}

export default RightContent;