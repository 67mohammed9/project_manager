import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { IconButton } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
    largeButton: {
      padding: 24
    },
    largeIcon: {
      fontSize: "15em"
    },
  });    

const AddProjectButton = (props) => {
    const { classes } = props;
    return (
    <IconButton className={classes.largeButton} aria-label="Delete">
        <AddBoxIcon className={classes.largeIcon} />
    </IconButton>
    );
};


AddProjectButton.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles)(AddProjectButton);


