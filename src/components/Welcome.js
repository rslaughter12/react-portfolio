import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A148C',
    color: 'white',
    padding: theme.spacing(4),
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
  },
  textContainer: {
    flex: '1',
    textAlign: 'left',
    marginLeft: theme.spacing(4),
    backgroundColor: '#222B45',
    padding: theme.spacing(4),
    position: 'relative',
    overflow: 'hidden',
    userSelect: 'none',
    borderRadius: theme.spacing(3),
  },
  borderAnimation: {
    position: 'absolute',
    content: '""',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '4px solid transparent',
    borderRadius: theme.spacing(3),
    animation: '$rgbWaveBorder 8s infinite linear',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '40%',
    userSelect: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '50%',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  icon: {
    fontSize: '2.5rem',
    color: 'white',
    cursor: 'pointer',
    margin: theme.spacing(0, 1),
  },
  '@keyframes rgbWaveBorder': {
    '0%': {
      borderColor: 'magenta',
    },
    '33.33%': {
      borderColor: 'pink',
    },
    '66.67%': {
      borderColor: 'skyblue',
    },
    '100%': {
      borderColor: 'magenta',
    },
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

  const handleClick = (event) => {
    const allowedElements = ['icon', 'hamburger']; // Add class names of allowed elements here

    // Check if the clicked element has any of the allowed class names
    if (!allowedElements.some((className) => event.target.classList.contains(className))) {
      event.stopPropagation();
    }
  };

  return (
    <section className={`hero is-fullheight ${classes.root}`} onClick={handleClick}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.imageContainer}>
            <img
              src="headshot.jpg"
              alt="Ryan Acevedo Slaughter"
              className={classes.image}
            />
          </div>
          <div className={classes.textContainer}>
            <div className={classes.borderAnimation}></div>
            <Typography variant="h4" className="title">
              Hello, my name is {props.name}!
            </Typography>
            <Typography variant="h6" className="subtitle">
              I have completed through the {props.credentials}.
            </Typography>
            <Typography variant="h6" className="subtitle">
              My prior education is from {props.degrees}.
            </Typography>
            <Typography variant="h6" className="subtitle">
              Please explore my portfolio page to see some of the projects that I have completed early on in my coding journey, as well as my contact information.
            </Typography>
            <div className={classes.iconContainer}>
              <IconButton onClick={handleGitHubClick}>
                <GitHubIcon className={`${classes.icon} icon`} />
              </IconButton>
              <IconButton onClick={handleLinkedInClick}>
                <LinkedInIcon className={`${classes.icon} icon`} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
