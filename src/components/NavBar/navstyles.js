// navstyles.js
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  appBar: {
    // Ensure the AppBar stays above the Drawer
    zIndex: theme.zIndex.drawer + 1,
    // Shift the top bar to the right if the drawer is open on large screens
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  toolbar: {
    display: 'flex',
    height: '80px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  title: {
    flexGrow: 1,
  },
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));