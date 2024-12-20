import React from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, } from '@mui/material';
import { useTheme } from '@mui/styles';
import useStyles from './sidestyles';

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <>
        <Link to="/" className={classes.imagelink}>
        </Link>
        </>
    );
};

export default Sidebar;