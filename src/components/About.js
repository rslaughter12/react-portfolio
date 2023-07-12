import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A148C', // Set the overall background color to dark blue
  },
  content: {
    backgroundColor: '#222B45', // Set the background color for the text section to a darker shade of blue
    padding: theme.spacing(4), // Add padding around the text section
    borderRadius: theme.spacing(3), // Add border radius to the text section
    color: 'white', // Set text color to white
    maxWidth: '1300px', // Limit the maximum width of the text section
    position: 'relative', // Set position to relative for the animation
    overflow: 'hidden', // Hide any overflow from the text container
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: '4px solid transparent',
      borderRadius: theme.spacing(3),
      animation: '$rgbWaveBorder 10s infinite',
    },
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

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          Hi there! My name is Ryan Acevedo Slaughter, and I am a master's degree holding educator who has a full-stack developer certification (anticipated July 2023) through the University of California Berkeley Extension Program. I have a passion for learning and teaching, and I am excited to be a part of the future of education and technology. I am currently seeking a position as a full-stack developer in the San Francisco Bay Area.
        </Typography>
        <Typography variant="body1">
          Feel free to explore other parts of my page to learn more about my projects as well as if you have any questions or would like to get in touch, don't hesitate to reach out through the contact information provided on my contact page.
        </Typography>
      </div>
    </div>
  );
};

export default About;
