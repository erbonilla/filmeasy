import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/styles';
import useStyles from './sidestyles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useDispatch, useSelector } from 'react-redux';

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
  const dispatch = useDispatch();

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
          <ListItem key={value} onClick={() => dispatch(selectGenreOrCategory(value))} button>
            <ListItemIcon>
              <img
                src={genreIcons[label.toLowerCase()] || redLogo}
                className={classes.genreImage}
                height={30}
                alt={label}
              />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data?.genres?.map(({ name, id }) => (
            <ListItem key={id} onClick={() => dispatch(selectGenreOrCategory(id))} button>
              <ListItemIcon>
                <img
                  src={genreIcons[name.toLowerCase()] || redLogo}
                  className={classes.genreImage}
                  height={30}
                  alt={name}
                />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;