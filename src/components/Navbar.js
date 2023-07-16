import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#4A148C',
    position: 'relative',
  },
  menuButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    marginLeft: theme.spacing(2),
    color: 'white',
  },
  drawerPaper: {
    width: 240,
    color: 'white',
    backgroundColor: '#222B45',
    opacity: 0.9,
    paddingTop: theme.spacing(4),
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem button component={Link} to="/react-portfolio" onClick={handleMenuItemClick}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={handleMenuItemClick}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/skills" onClick={handleMenuItemClick}>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={handleMenuItemClick}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={handleMenuItemClick}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
