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
    color: '#222B45', // Set text color to white
    borderRadius: '5px', // Add border radius to the card
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow to the card
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    flex: '1',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    marginBottom: theme.spacing(2),
    borderRadius: '5px',
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <img className={classes.image} src="project1.jpg" alt="Project 1" />
          <Typography variant="h6" gutterBottom>
            Marvel API
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project pulls data from two different third party APIs and displays the data in a user friendly way. The user can search for a Marvel character and the app will display the character's name, description, and a list of Movies that the character appears in as well as other cool features!
          </Typography>
          <a href="https://rslaughter12.github.io/The-Avengers/">Click Here to learn more about Marvel!</a>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src="project2.jpg" alt="Project 2" />
          <Typography variant="h6" gutterBottom>
            Bikini Bottom Booking
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project uses Sequelize to create a database of users based on front end user input. The user can create a username and password and then login to place their order. The data from the menus is being pulled from the database and displayed on the page using handlebars.
          </Typography>
          <a href="https://bbbooking.herokuapp.com/">Click Here to see Bikini Bottom Booking!</a>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src="project3.jpg" alt="Project 3" />
          <Typography variant="h6" gutterBottom>
            JavaScript Quiz Game
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project is a timed quiz game that uses JavaScript to dynamically change the HTML and CSS of the page. The user is presented with a series of questions and the game ends when the timer runs out or the user answers all of the questions. 
          </Typography>
          <a href="https://rslaughter12.github.io/js-quiz-game/">Click Here to see the JavaScript Game!</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
