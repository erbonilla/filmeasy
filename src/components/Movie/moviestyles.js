// moviestyles.js
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  links: {
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  poster: {
    borderRadius: '20px',
    padding: '10px',
    height: '300px',
    marginBottom: '10px',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    fontSize: '0.845rem',
    width: '230px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
}));