import React from 'react';
import { useGetMoviesQuery } from '../../services/TMDB';
import { Box, CircularProgress, Typography } from '@mui/material';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    return 'An error has occurred';
  }

  if (!data || !data.results || !data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match your search <br />
          Please search for something else
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <MovieList movies={data} />
    </Box>
  );
};

export default Movies;