import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A148C',
    color: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  contentContainer: {
    textAlign: 'center',
  },
  card: {
    width: '600px',
    margin: '0 auto',
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
    backgroundColor: '#222B45',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative', // Set position to relative for the animation
    overflow: 'hidden', // Hide any overflow from the card container
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    color: 'white',
  },
  inputField: {
    marginBottom: theme.spacing(2),
    color: 'white',
    width: '100%',
    '& label': {
      color: 'white',
    },
    '& input': {
      color: 'white', // Set the input text color to white
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
  borderAnimation: {
    position: 'absolute',
    content: '""',
    top: '1px', // Adjust the top value to align the animation properly
    left: '1px', // Adjust the left value to align the animation properly
    right: '1px', // Adjust the right value to align the animation properly
    bottom: '1px', // Adjust the bottom value to align the animation properly
    border: '3px solid transparent',
    borderRadius: 'px',
    animation: '$rgbWaveBorder 10s infinite linear',
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

const Contact = () => {
  const classes = useStyles();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Retrieve form values
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    try {
      // Make the API POST request
      await axios.post('/api/send-email', { name, email, message });

      // Reset the form after successful submission
      event.target.reset();

      // Set the form submission status to true
      setIsFormSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      // Handle error scenarios
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <Typography variant="h4" gutterBottom>
          Contact Me!
        </Typography>
        <Typography variant="h4" gutterBottom>
          Ryan Acevedo Slaughter
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: racevedoslaughter12@gmail.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone Number: 727-858-0021
        </Typography>
        <Typography variant="body1">
          City/Region: San Francisco, CA (Bay Area)
        </Typography>

        <div className={classes.card}>
          {!isFormSubmitted ? (
            <>
              <div className={classes.borderAnimation}></div>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  className={classes.inputField}
                  required
                />
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  className={classes.inputField}
                  required
                />
                <TextField
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  className={classes.inputField}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                >
                  Send Message
                </Button>
              </form>
            </>
          ) : (
            <Typography variant="h5" className={classes.successMessage}>
              Message sent successfully!
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
