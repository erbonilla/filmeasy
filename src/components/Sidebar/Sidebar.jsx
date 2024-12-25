// Sidebar.jsx
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Toolbar,
  Typography,
} from '@mui/material';
import useStyles from './sidestyles';
import { categories } from '../../utils';

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
    >
      <Toolbar />
      <div>
        <Typography variant="h6" className={classes.title}>
          Categories
        </Typography>
        <Divider />
        <List>
          {categories.map((category) => (
            <ListItem button key={category.label}>
              <ListItemText primary={category.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;