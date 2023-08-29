import movies from './data/movies.json';
import type { Movie } from './models';
import { Router } from 'express';

const top10Movies: Movie[] = movies.slice(0, 10);

export const top10MoviesRouter = Router();

/** get top 10 movies */
top10MoviesRouter.get('/', (_, res) => {
  res.send(top10Movies);
});

/** get movie with specified id */
top10MoviesRouter.get('/:id', (req, res) => {
  const movie = movies.find((movie) => movie.id === req.params.id);
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).end();
  }
});
