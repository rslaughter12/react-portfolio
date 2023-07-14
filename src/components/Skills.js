import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNode, faReact, faNpm, faMdb, faBootstrap,} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A148C', // Set the overall background color to dark blue
    userSelect: 'none',
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
  skillIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
  },
  icon: {
    fontSize: '3rem',
    margin: theme.spacing(2),
    color: '#FFFFFF',
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

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body1" gutterBottom>
          A full stack developer possesses a diverse set of skills required for both front-end and back-end development. These skills include HTML5, CSS3, JavaScript, Node.js, Express, Sequelize, React, MERN stack (MongoDB, Express, React, Node.js), MVC (Model-View-Controller) architecture, ORM (Object-Relational Mapping), MongoDB, Postman, npm (Node Package Manager), Heroku, Apollo GraphQL, Bootstrap, Insomnia, jQuery, JWT (JSON Web Tokens), React Router, Webpack, and Postman.
        </Typography>
        <Typography variant="body1">
          These skills enable a full stack developer to handle various aspects of web development, such as designing and structuring web pages, implementing client-side interactivity, building server-side applications, managing databases, and integrating different technologies and APIs.
        </Typography>
        <div className={classes.skillIcons}>
          <FontAwesomeIcon icon={faHtml5} className={classes.icon} />
          <FontAwesomeIcon icon={faCss3} className={classes.icon} />
          <FontAwesomeIcon icon={faJs} className={classes.icon} />
          <FontAwesomeIcon icon={faNode} className={classes.icon} />
          <FontAwesomeIcon icon={faReact} className={classes.icon} />
          <FontAwesomeIcon icon={faNpm} className={classes.icon} />
          <FontAwesomeIcon icon={faMdb} className={classes.icon} />
          <FontAwesomeIcon icon={faBootstrap} className={classes.icon}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
