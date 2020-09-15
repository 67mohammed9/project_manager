import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Project from './Project';
import AddProjectButton from './AddProjectButton';
import { useSelector } from 'react-redux'


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

const ProjectArray = () => {
    const classes = useStyles();
    const  project = useSelector(state => state.projects);
    return (
        <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
           
            {
                project.map(projectItem =>{
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <Project id={projectItem.id} />
                        </Grid>
                    )            
                })
            }
        
        <Grid item xs={12} sm={6} md={4}>
            <AddProjectButton />
        </Grid>
      </Grid>
    );
};


export default ProjectArray;