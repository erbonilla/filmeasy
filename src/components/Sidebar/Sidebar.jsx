import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/styles';
import useStyles from './sidestyles'; // Ensure sidestyles.js is in the same folder
import { useGetGenresQuery } from '../../services/TMDB'; // Ensure the path is correct
import genreIcons from '../../assets/genres'; // Ensure the path is correct

const redLogo = 'https://i.ibb.co/ft4skBS/logored.png';
const blueLogo = 'https://i.ibb.co/5K6vdzx/logoblue.png';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? blueLogo : redLogo}
          alt="EasyLogo"
        />
      </Link>

      <Divider />

      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to={`/category/${value}`}>
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                {genreIcons[label.toLowerCase()] ? (
                  <img src={genreIcons[label.toLowerCase()]} className={classes.genreImage} height={30} alt={label} />
                ) : (
                  <img src={redLogo} className={classes.genreImage} height={30} alt="default-icon" />
                )}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : data && data.genres ? (
          data.genres.map(({ name, id }) => (
            <Link key={id} className={classes.links} to={`/genre/${id}`}>
              <ListItem onClick={() => {}} button>
                <ListItemIcon>
                  {genreIcons[name.toLowerCase()] ? (
                    <img src={genreIcons[name.toLowerCase()]} className={classes.genreImage} height={30} alt={name} />
                  ) : (
                    <img src={redLogo} className={classes.genreImage} height={30} alt="default-icon" />
                  )}
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        ) : (
          <Box display="flex" justifyContent="center">
            <p>No genres available</p>
          </Box>
        )}
      </List>
    </>
  );
};

export default Sidebar;