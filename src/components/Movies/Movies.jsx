import React from 'react';
import { useGetMoviesQuery } from '../../services/TMDB';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';


const Movies = () => {

    const { data, error, isFetching } = useGetMoviesQuery();
            // console.log(data);

    if (isFetching) {
        return (
            <Box display="flex" justifyContent="center">
                <CircularProgress size="4rem" />
            </Box>
        );
    }

    if (!data.results.length) {
        return (
            <Box display="flex" alignItems="center" mt="20px">
                <Typography variant={"h4"}>
                    No movies that match your search <br />
                    Please search for something else
                    </Typography>          
            </Box>
        );
    }
    if (error) return 'An error has occurred';


    return (
        <div>
            <h1>Movies page</h1>
        </div>
    );
};

export default Movies;