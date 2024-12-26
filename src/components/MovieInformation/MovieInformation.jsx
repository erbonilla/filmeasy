import React from 'react';
import { Modal, Box, Typography, Button, ButtonGroup, Grid, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, Favorite, PlusOne, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import {Link, useParams} from 'react-router-dom';

const MovieInformation = () => {

    const { id } = useParams();


    return (
        <div>
            Movie Information {id}
        </div>
    );
};

export default MovieInformation;