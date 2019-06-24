import React, { Fragment } from 'react';
import './App.css';

import Header from './components/Header/Header';
import LeftNav from './components/Layout/LeftNav';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import 'typeface-roboto';

const useStyles = makeStyles( theme => ({

}));


function App() {

  const classes = useStyles();

  return (
   	<Fragment>
   		<Header />

   		<Grid container>
    		<Grid item md={3} xs={12}>
    			<LeftNav />
    		</Grid>
    		<Grid item md={9} xs={12}>
    			<h1>Right Nav, I don't exist yet.</h1>
    		</Grid>
    	</Grid>
   	</Fragment>
  );
}

export default App;
