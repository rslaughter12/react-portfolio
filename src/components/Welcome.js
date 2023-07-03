import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A148C', // Replace with your desired dark blue/purple color code
    color: 'white', // Set text color to white
  },
  textContainer: {
    textAlign: 'left',
    marginLeft: theme.spacing(8), // Adjust the margin left of the text
    marginTop: theme.spacing(8), // Adjust the margin top of the text
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(10), // Adjust the margin bottom of the image
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '50%',
    marginRight: theme.spacing(5), // Adjust the margin right of the image
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(8),
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
    <section className={`hero is-fullheight ${classes.root}`}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
          <div className={`column is-half ${classes.imageContainer}`}>
              <img
                src="headshot.jpg"
                alt="Ryan Acevedo Slaughter"
                className={classes.image}
              />
            </div>
            <div className={`column is-half ${classes.textContainer}`}>
              <Typography variant="h4" className="title">
                {props.name}
              </Typography>
              <Typography variant="h6" className="subtitle">
                {props.credentials}
              </Typography>
              <Typography variant="h6" className="subtitle">
                {props.degrees}
              </Typography>
              <div className={classes.iconContainer}>
                <GitHubIcon className={classes.icon} onClick={handleGitHubClick} />
                <LinkedInIcon className={classes.icon} onClick={handleLinkedInClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
