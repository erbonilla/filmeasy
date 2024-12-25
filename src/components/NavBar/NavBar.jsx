// NavBar.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useStyles from './navstyles';
import { fetchToken } from '../../utils';

const NavBar = () => {
  const classes = useStyles();

  const handleLoginClick = () => {
    fetchToken(); // Redirect to TMDB login
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Filmeasy
        </Typography>
        <div className={classes.loginContainer}>
          <Button
            color="inherit"
            onClick={handleLoginClick}
            startIcon={<AccountCircle />}
          >
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;