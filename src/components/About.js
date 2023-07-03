import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A148C', // Replace with your desired dark blue/purple color code
    color: 'white', // Set text color to white
    borderRadius: '5px', // Add border radius to the card
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow to the card
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={`card ${classes.root}`}> {/* Add the 'card' class and the custom styles */}
      <div className="card-content">
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          Hi there! My name is [Your Name], and I am [briefly describe yourself, e.g., a software developer, a student, etc.]. I have a passion for [mention your interests, skills, or areas of expertise].
        </Typography>
        <Typography variant="body1" gutterBottom>
          [Add more information about yourself, such as your background, education, or any relevant experiences you want to highlight. Keep it concise and engaging.]
        </Typography>
        <Typography variant="body1" gutterBottom>
          In my free time, I enjoy [mention your hobbies or activities you like to do outside of work/studies].
        </Typography>
        <Typography variant="body1">
          Feel free to explore my website/portfolio to learn more about my work and projects. If you have any questions or would like to get in touch, don't hesitate to reach out through the contact information provided.
        </Typography>
      </div>
    </div>
  );
};

export default About;
