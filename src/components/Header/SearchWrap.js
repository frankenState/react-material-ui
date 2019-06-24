import React, { Fragment, useState } from 'react';

import Badge from '@material-ui/core/Badge';
import Search from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  emailNotif: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
  white: {
    color:'#fff'
  }
}));



const SearchWrap = (props) => {

  const classes = useStyles();

  const [ searchTxt, setSearchTxt ] = useState('');
  const [ showTxt, setShowTxt ] = useState(false);

  return (
      <Fragment>
       
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Search onClick={()=> setShowTxt(!showTxt)} />
            </Grid>
            { showTxt ? (
              <Grid item>
                <TextField
                  onChange={(e)=> setSearchTxt(e.target.value)}
                  InputProps={{
                    className: classes.white
                  }}
                />
              </Grid>
            ): null}
            
          </Grid>
        </div>

      </Fragment>
  )
}

export default SearchWrap;