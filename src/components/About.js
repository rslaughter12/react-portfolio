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
    backgroundColor: '#4A148C',
    userSelect: 'none',
  },
  content: {
    backgroundColor: '#222B45',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(3),
    color: 'white',
    maxWidth: '1300px',
    position: 'relative',
    overflow: 'hidden',
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
      userSelect: 'none',
    },
  },
  circleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    userSelect: 'none',
  },
  circleImage: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    border: '4px solid white',
    margin: theme.spacing(0, 2),
    userSelect: 'none',
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
        <div className={classes.circleContainer}>
          <img
            src="bri and ry portfolio.jpg"
            alt="Image 1"
            className={classes.circleImage}
          />
          <img 
            src="flower.jpg"
            alt="Image 2"
            className={classes.circleImage}
          />
        </div>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" gutterBottom>
              Hi there! My name is Ryan Acevedo Slaughter. I am originally from Tampa Bay, Florida but have now lived in San Francisco for almost three years with my wife and our dog. In my free time, I am either gaming or watching sports.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              I am a master's degree holding educator who has a full-stack developer certification (anticipated July 2023) through the University of California Berkeley Extension Program. I have a passion for learning and teaching, and I am excited to be a part of the future of education and technology. I am currently open to positions as a full-stack developer in the San Francisco Bay Area.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Through my work experience as a teacher, I have developed a strong work ethic, a passion for learning, and a desire to help others. I have also developed strong communication skills, both written and verbal, and I have learned to work well with others. I am a team player who is always willing to help others, and I am always looking for ways to improve myself and my work. I have experience leading teams of people, and I am comfortable taking on leadership roles when needed. I am excited to utilize the experiences from my past as a teacher into my new career as a software developer. I am also proficient in Spanish.
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
