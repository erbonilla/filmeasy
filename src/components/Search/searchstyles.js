import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      width: '100%',
    },
  },
  input: {
    color: theme.palette.mode === 'light' ? 'black' : 'white',
    filter: theme.palette.mode === 'light' ? 'invert(0)' : 'invert(1)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-10px',
      marginBottom: '10px',
    },
  },
}));