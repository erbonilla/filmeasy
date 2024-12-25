// movieliststyles.js
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // Remove custom scroll styling; let it scroll normally on smaller screens:
    scrollbarWidth: 'none', // For Firefox
    '&::-webkit-scrollbar': {
      display: 'none',       // For Chrome, Safari, Opera
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));