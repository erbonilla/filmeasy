import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon } from '@mui/material';
import { useTheme } from '@mui/styles';
import useStyles from './sidestyles'; // Ensure sidestyles.js is in the same folder
import { Label } from '@mui/icons-material';

const redLogo = 'https://i.ibb.co/ft4skBS/logored.png';
const blueLogo = 'https://i.ibb.co/5K6vdzx/logoblue.png';

const categories = [
  { Label: 'Popular', value: 'popular' },
  { Label: 'Top Rated', value: 'top_rated' }, // Added missing comma
  { Label: 'Upcoming', value: 'upcoming' },    // Added missing comma
];

const demoCategories = [
  { Label: 'Comedy', value: 'comedy' },
  { Label: 'Action', value: 'action' },   // Added missing comma
  { Label: 'Horror', value: 'horror' },   // Added missing comma
  { Label: 'Animation', value: 'animation' },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

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
        {demoCategories.map(({ Label, value }) => (
          <Link key={value} className={classes.links} to={`/category/${value}`}>
            <ListItem button onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImage}
                  height={30}
                  alt={Label}/>
              </ListItemIcon> */}
              <ListItemText primary={Label} />
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>
        {categories.map(({ Label, value }) => (
          <Link key={value} className={classes.links} to={`/category/${value}`}>
            <ListItem button onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImage}
                  height={30}
                  alt={Label}/>
              </ListItemIcon> */}
              <ListItemText primary={Label} />
            </ListItem>
          </Link>
        ))}
      </List>

    </>
  );
};

export default Sidebar;