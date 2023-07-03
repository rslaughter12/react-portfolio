import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A148C',
    color: '#222B45',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(4),
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  image: {
    width: '100%',
    marginBottom: theme.spacing(2),
    borderRadius: '5px',
  },
  linkContainer: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
  },
  linkIcon: {
    fontSize: '2rem',
    color: '#4A148C',
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
  },
}));

const Projects = () => {
  const classes = useStyles();

  const handleGitHubClick = (repoLink) => {
    window.open(repoLink);
  };

  return (
    <div className={classes.root}>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <img className={classes.image} src="Marvel.png" alt="Project 1" />
          <Typography variant="h6" gutterBottom>
            Marvel API
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project pulls data from two different third-party APIs and displays the data in a user-friendly way. The user can search for a Marvel character, and the app will display the character's name, description, and a list of movies that the character appears in, as well as other cool features!
          </Typography>
          <a href="https://rslaughter12.github.io/The-Avengers/">Click Here to learn more about Marvel!</a>
          <div className={classes.linkContainer}>
            <GitHubIcon
              className={classes.linkIcon}
              onClick={() => handleGitHubClick('https://github.com/rslaughter12/The-Avengers')}
            />
          </div>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src="BikiniBottom.png" alt="Project 2" />
          <Typography variant="h6" gutterBottom>
            Bikini Bottom Booking
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project uses Sequelize to create a database of users based on frontend user input. The user can create a username and password and then log in to place their order. The data from the menus is being pulled from the database and displayed on the page using handlebars.
          </Typography>
          <a href="https://bbbooking.herokuapp.com/">Click Here to see Bikini Bottom Booking!</a>
          <div className={classes.linkContainer}>
            <GitHubIcon
              className={classes.linkIcon}
              onClick={() => handleGitHubClick('https://github.com/Omarggm/BikiniBottomBooking')}
            />
          </div>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src="JSQuiz.png" alt="Project 3" />
          <Typography variant="h6" gutterBottom>
            JavaScript Quiz Game
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project is a timed quiz game that uses JavaScript to dynamically change the HTML and CSS of the page. The user is presented with a series of questions, and the game ends when the timer runs out or the user answers all of the questions.
          </Typography>
          <a href="https://rslaughter12.github.io/js-quiz-game/">Click Here to see the JavaScript Game!</a>
          <div className={classes.linkContainer}>
            <GitHubIcon
              className={classes.linkIcon}
              onClick={() => handleGitHubClick('https://github.com/rslaughter12/js-quiz-game')}
            />
          </div>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src="JSQuiz.png" alt="Project 4" />
          <Typography variant="h6" gutterBottom>
            JavaScript Quiz Game
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project is a timed quiz game that uses JavaScript to dynamically change the HTML and CSS of the page. The user is presented with a series of questions, and the game ends when the timer runs out or the user answers all of the questions.
          </Typography>
          <a href="https://rslaughter12.github.io/js-quiz-game/">Click Here to see the JavaScript Game!</a>
          <div className={classes.linkContainer}>
            <GitHubIcon
              className={classes.linkIcon}
              onClick={() => handleGitHubClick('https://github.com/rslaughter12/js-quiz-game')}
            />
          </div>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src="JSQuiz.png" alt="Project 5" />
          <Typography variant="h6" gutterBottom>
            JavaScript Quiz Game
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project is a timed quiz game that uses JavaScript to dynamically change the HTML and CSS of the page. The user is presented with a series of questions, and the game ends when the timer runs out or the user answers all of the questions.
          </Typography>
          <a href="https://rslaughter12.github.io/js-quiz-game/">Click Here to see the JavaScript Game!</a>
          <div className={classes.linkContainer}>
            <GitHubIcon
              className={classes.linkIcon}
              onClick={() => handleGitHubClick('https://github.com/rslaughter12/js-quiz-game')}
            />
          </div>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src="JSQuiz.png" alt="Project 5" />
          <Typography variant="h6" gutterBottom>
            JavaScript Quiz Game
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project is a timed quiz game that uses JavaScript to dynamically change the HTML and CSS of the page. The user is presented with a series of questions, and the game ends when the timer runs out or the user answers all of the questions.
          </Typography>
          <a href="https://rslaughter12.github.io/js-quiz-game/">Click Here to see the JavaScript Game!</a>
          <div className={classes.linkContainer}>
            <GitHubIcon
              className={classes.linkIcon}
              onClick={() => handleGitHubClick('https://github.com/rslaughter12/js-quiz-game')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
