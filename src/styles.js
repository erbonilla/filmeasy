// styles.js
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
  },
  // Ensures content starts below the 80px-high AppBar
  toolbar: {
    height: '80px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // Ensure the main area is offset to the right of the drawer on large screens
    marginTop: '80px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
    },
  },
}));