// Movie.jsx
import React from 'react';
import { Grid, Grow, Tooltip, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './moviestyles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://i.ibb.co/ft4skBS/logored.png'
            }
            alt={movie.title}
            className={classes.poster}
          />
          <Typography className={classes.title} variant="subtitle1">
            {movie.title || "Untitled Movie"}
          </Typography>

          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;