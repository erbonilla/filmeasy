// Movies.js
import React, { useState } from 'react';
import { useGetMoviesQuery } from '../../services/TMDB';
import { Box, CircularProgress, Typography } from '@mui/material';
import MovieList from '../MovieList/MovieList';
import { useSelector } from 'react-redux';

const Movies = () => {
  // If you are not actually using pagination, you can remove setPage
  const [page] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" mt="50px">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt="50px">
        <Typography variant="h6">An error has occurred: {error.message}</Typography>
      </Box>
    );
  }

  if (!data || !data.results || !data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies match your search criteria. <br />
          Please try again with a different search.
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