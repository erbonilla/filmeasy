import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  movie: {
    padding: '10px',
    paddingLeft: '30px',
  },
  links: {
      alignItems: 'center',
      fontWeight: 'bolder',
      textDecoration: 'none',
      [theme.breakpoints.up('xs')]: {
        display: 'flex',
        flexDirection: 'column',
      },
      '&:hover':{
        cursor: 'pointer',
      },
    },
    

}));