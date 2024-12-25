// sidestyles.js
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    top: '80px',
    [theme.breakpoints.down('sm')]: {
      top: 0,
    },
  },
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));