import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesContainer: {
    // Make the container use MUI's Grid with multiple columns
    // and avoid overwriting with extra scroll unless you really need it
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    scrollbarWidth: 'none', // For Firefox
    '&::-webkit-scrollbar': {
      display: 'none',  // For Chrome, Safari, and Opera
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));