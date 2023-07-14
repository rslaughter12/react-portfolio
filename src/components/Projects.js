import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A148C',
    color: '#222B45',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(2),
    userSelect: 'none',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(4),
    maxWidth: '1500px',
    margin: '0 auto',
    userSelect: 'none',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  card: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `4px solid magenta`,
    borderRadius: '10px',
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
    marginBottom: theme.spacing(1.5),
    cursor: 'pointer',
  },
  title: {
    color: 'white',
  },
}));

const Projects = () => {
  const classes = useStyles();

  const handleGitHubClick = (repoLink) => {
    window.open(repoLink);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title} gutterBottom>
        Projects
      </Typography>
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <img className={classes.image} src="Marvel.png" alt="Project 1" />
          <Typography variant="h6" gutterBottom>
            Marvel API
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project pulls data from two different third-party APIs and displays the data in a user-friendly way. The user can search for a Marvel character, and the app will display the character's name, description, and a list of movies that the character appears in, as well as other cool features!
          </Typography>
          <Button className={classes.button} href="https://rslaughter12.github.io/The-Avengers/" variant="contained" sx={{ backgroundColor: '#4A148C', color: '#FFFFFF' }}>
              Deployed
          </Button>
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
          <Button className={classes.button} href="https://bbbooking.herokuapp.com/" variant="contained" sx={{ backgroundColor: '#4A148C', color: '#FFFFFF' }}>
              Deployed
          </Button>
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
          <Button className={classes.button} href="https://rslaughter12.github.io/js-quiz-game/" variant="contained" sx={{ backgroundColor: '#4A148C', color: '#FFFFFF' }}>
              Deployed
          </Button>
          <div className={classes.linkContainer}>
            <GitHubIcon
              className={classes.linkIcon}
              onClick={() => handleGitHubClick('https://github.com/rslaughter12/js-quiz-game')}
            />
          </div>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src="weather.png" alt="Project 4" />
          <Typography variant="h6" gutterBottom>
            Weather Dashboard
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project is a Weather Dashboard that pulls data from a third-party API and displays the current weather and a five-day forecast for the city that the user searches for. The user can also see a list of their recent searches and click on them to see the weather for that city again.
          </Typography>
          <Button className={classes.button} href="https://rslaughter12.github.io/Weather-Dashboard/" variant="contained" sx={{ backgroundColor: '#4A148C', color: '#FFFFFF' }}>
              Deployed
          </Button>
          <div className={classes.linkContainer}>
            <GitHubIcon
              className={classes.linkIcon}
              onClick={() => handleGitHubClick('https://github.com/rslaughter12/Weather-Dashboard')}
            />
          </div>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src="server.png" alt="Project 5" />
          <Typography variant="h6" gutterBottom>
            Social Network API (Back End)
          </Typography>
          <Typography variant="body1" gutterBottom>
            This project is a RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.
          </Typography>
          <a>Click the Github Logo to see the code!</a>
          <div className={classes.linkContainer}>
            <GitHubIcon
              className={classes.linkIcon}
              onClick={() => handleGitHubClick('https://github.com/rslaughter12/Social-Network-API')}
            />
          </div>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src="https://img.buzzfeed.com/buzzfeed-static/static/2020-06/9/19/asset/fe3d2c918a56/anigif_sub-buzz-400-1591732330-13.gif" alt="Project 6" />
          <Typography variant="h6" gutterBottom>
            Project 3 (Coming Soon!)
          </Typography>
          <Typography variant="body1" gutterBottom>
            When I complete my next project, it will be displayed here!
          </Typography>
          <a>Click here (in the future) to see the project!</a>
          <div className={classes.linkContainer}>
            <GitHubIcon
              className={classes.linkIcon}
              // onClick={() => handleGitHubClick('')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;