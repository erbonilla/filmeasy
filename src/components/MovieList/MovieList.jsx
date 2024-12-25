// MovieList.jsx
import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './movieliststyles';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
  const classes = useStyles();

  if (!movies || !movies.results) {
    return <p>No movies available</p>;
  }

  return (
    <Grid container className={classes.moviesContainer} spacing={3}>
      {movies.results.map((movie, i) => (
        <Movie key={movie.id || i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;