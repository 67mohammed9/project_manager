import React from 'react';
import { IconButton} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from '@material-ui/icons/AddBox';
import {Grid} from '@material-ui/core'



const useStyles = makeStyles({


  largeButton: {
    padding: 24
  },
  largeIcon: {
    fontSize: "13em"
  },
});

const Trigger = ({  buttonRef, showModal }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} >
      <IconButton
        className={classes.largeButton}
        aria-label="Add"
        ref={buttonRef}
        onClick={showModal}
      >
        <AddBoxIcon className={classes.largeIcon} />
      </IconButton>
    </Grid>

  );
};
export default Trigger;

