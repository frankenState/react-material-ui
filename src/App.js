import React, { Fragment } from 'react';

import './App.css';

import Header from './components/Header/Header';
import LeftNav from './components/Layout/LeftNav';
import RightContent from './components/Layout/RightContent';

import ContentHeader from './components/Basket/ContentHeader';


import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import 'typeface-roboto';

const useStyles = makeStyles( theme => ({
    red: {
      backgroundColor: '#fc3030',
      paddingTop: 0,
    },
    borderStyle: {
      borderRight: '1px solid #616161',
    }
}));


function App() {

  const classes = useStyles();

  return (
   	<Fragment>
   		<Grid container>
        <Grid item md={12} xs={12}>
          <Header />
        </Grid>
    		<Grid item md={3} xs={12} className={classes.borderStyle}>
    			<LeftNav />
    		</Grid>
    		<Grid item md={9} xs={12}>
          <ContentHeader/>
    			<RightContent />
    		</Grid>
    	</Grid>
   	</Fragment>
  );
}

export default App;
