import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core'
import img from '../images/lizard.jpg';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 370,
    minWidth: 370,
    maxHeight: 600,
    //minHeight: 500
  },
  media: {
    height: 250,
  },
  grid: {
    width: '100%',
    margin: '0px'
  }

});

export default function Project({ project }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} justify="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {project.about}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            to={{ pathname: `/project/${project.id}` }}
            style={{ textDecoration: 'none' }}
          >
            <Button size="small" color="primary"  >
              Open Tasks
        </Button>
          </Link>
          <Button size="small" color="secondary" >
            Delete Project
        </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
