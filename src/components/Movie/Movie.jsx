import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './moviestyles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Link className={classes.links} to={`/movie/${movie.id}`}>
        <img className={classes.image}
          src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://i.ibb.co/ft4skBS/logored.png'
          }
          alt={movie.title}
          className={classes.poster}
        />
        <Typography className={classes.title} variant="subtitle1">
          {movie.title || "Untitled Movie"}
        </Typography>
      </Link>
    </Grid>
  );
};

export default Movie;