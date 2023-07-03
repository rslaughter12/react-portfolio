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
    borderRadius: '5px', // Add border radius to the container
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow to the container
  },
  contentContainer: {
    textAlign: 'center',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <Typography variant="h4" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: example@example.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: +1 123-456-7890
        </Typography>
        <Typography variant="body1">
          City: Your City
        </Typography>
      </div>
    </div>
  );
};

export default Contact;