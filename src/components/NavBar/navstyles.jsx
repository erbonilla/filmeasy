import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    height: '80px',
    justifyContent: 'space-between',

    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer:{
    [theme.breakpoints.up('sm')]:{
        width: drawerWidth,
        flexSrink: 0,
    },
  },
  drawerPaper:{


  },

  linkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
}));