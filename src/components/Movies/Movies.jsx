import React from 'react';
import { useGetMoviesQuery } from '../../services/TMDB';
import { Box, CircularProgress, Typography } from '@mui/material';
import MovieList from '../MovieList/MovieList';
import { useSelector } from 'react-redux';

const Movies = () => {
  const [page, setPage] = React.useState(1);
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);

  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography variant="h6">An error has occurred: {error.message}</Typography>
      </Box>
    );
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