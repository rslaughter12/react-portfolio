import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

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
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  inputField: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  successMessage: {
    color: 'green',
    marginTop: theme.spacing(2),
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve form values
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Implement email sending functionality here or make an API request to send the data
    // This code only displays the values in the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form after submission
    event.target.reset();

    // Set the form submission status to true
    setIsFormSubmitted(true);
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
