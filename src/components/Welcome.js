import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A148C', // Replace with your desired dark blue/purple color code
  },
  textContainer: {
    textAlign: 'left',
    marginLeft: theme.spacing(40), // Adjust the margin left of the text
    marginTop: theme.spacing(20), // Adjust the margin top of the text
    // [theme.breakpoints.down('sm')]: {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   textAlign: 'left',
    //   marginLeft: theme.spacing(0), // Adjust the margin left of the text
    //   marginTop: theme.spacing(0), // Adjust the margin top of the text
    // },
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(50), // Adjust the margin bottom of the image

    [theme.breakpoints.down('sm')]: {
      display: 'none', // Hide the image on small screens
    },
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '50%',
    marginRight: theme.spacing(50), // Adjust the margin right of the image
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(39),
    marginTop: theme.spacing(2),
  },
  icon: {
    fontSize: '2.5rem', // Adjust the icon size
    color: 'white',
    cursor: 'pointer',
    margin: theme.spacing(0, 1), // Add margin around the icons
  },
}));

export const Welcome = (props) => {
  const classes = useStyles();

  const handleGitHubClick = () => {
    window.open('https://github.com/rslaughter12');
  };
  
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ryan-slaughter-b940ab143/');
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6}>
        <Grid container justify="center" alignItems="center" className={classes.contentContainer}>
          <Grid item xs={12} className={classes.textContainer}>
            <Typography variant="h4" style={{ color: 'white' }}>
              {props.name}
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
              {props.credentials}
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
              {props.degrees}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.iconContainer}>
            <GitHubIcon className={classes.icon} onClick={handleGitHubClick} />
            <LinkedInIcon className={classes.icon} onClick={handleLinkedInClick} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.imageContainer}>
        <img
          src="headshot.jpg"
          alt="Ryan Acevedo Slaughter"
          className={classes.image}
        />
      </Grid>
    </Grid>
  );
};
