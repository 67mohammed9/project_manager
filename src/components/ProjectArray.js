import React from 'react';
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Project from './Project';
//import AddProjectButton from './AddProjectButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddProject from './CreateProject/Container'
import { useSelector } from 'react-redux'



const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});
let number = 2;
const ProjectArray = () => {
    const classes = useStyles();
    const  project = useSelector(state => state.projects);
    console.log(project)
    return (
      <Grid container spacing={3} className={classes.gridContainer}> 
        {
          project.map(projectItem => {
            return (
              <Project project={projectItem} />
            )
          })
        }
        <Grid item xs={12} sm={6} md={4} justify="center">
          <AddProject />
        </Grid>
      </Grid>

        
     
    
    );
};


export default ProjectArray;


