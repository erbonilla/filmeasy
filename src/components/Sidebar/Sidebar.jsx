import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, } from '@mui/material';
import { useTheme } from '@mui/styles';
import useStyles from './sidestyles';
import { Label } from '@mui/icons-material';

const redLogo = 'https://i.ibb.co/ft4skBS/logored.png'
const blueLogo = 'https://i.ibb.co/5K6vdzx/logoblue.png'

const categories = [
    { Label: 'Popular', value: 'popular' },
    { Label: 'Top Rated', value: 'top_rated' }
    { Label: 'Upcoming', value: 'upcoming' }

]

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <>
        <Link to="/" className={classes.imagelink}>
        <img 
        className={classes.image}
        src={ theme.palette.mode === 'light' ? blueLogo : redLogo } 
        alt='EasyLogo' />


        </Link>
        </>
    );
};

export default Sidebar;