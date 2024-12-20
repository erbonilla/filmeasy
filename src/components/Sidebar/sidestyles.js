
// sidestyles.js
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10%',
  },
  image: {
    width: '70%',
  },
  links: {
    textDecoration: 'none', 
    color: theme.palette.text.primary,
  },
  genreImage: {
    marginRight: '10px',
  },
}));