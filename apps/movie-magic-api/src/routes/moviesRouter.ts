import movies from './data/movies.json';
import type { Movie } from './models';
import { Router } from 'express';

const top10Movies: Movie[] = movies.slice(0, 10);
const newReleases: Movie[] = movies.filter((movie) => movie.year >= 2023);

function createCertFilter(certs: unknown[]) {
  return certs.reduce((accumulator: string[], cert) => {
    if (typeof cert === 'string') {
      accumulator.push(cert.toUpperCase());
    }
    return accumulator;
  }, []);
}

export const moviesRouter = Router();

/** get top 10 movies */
moviesRouter.get('/', (req, res) => {
  const { q, cert } = req.query;

  // decide which list to use
  let movieList: Movie[] = movies;
  if (q === 'top-10') {
    movieList = top10Movies;
  } else if (q === 'new-releases') {
    movieList = newReleases;
  }

  // filter by certifications
  if (cert === undefined) {
    res.send(movieList);
  } else {
    let certFilter: string[] = [];
    if (typeof cert === 'string') {
      // cert.split is required because Next.js sends multiple certs like this: cert=PG13,R
      certFilter = createCertFilter(cert.split(','));
    } else if (cert instanceof Array) {
      certFilter = createCertFilter(cert);
    }
    res.send(
      movieList.filter((movie) => certFilter.includes(movie.certification))
    );
  }
});

/** get movie with specified id */
moviesRouter.get('/:id', (req, res) => {
  const movie = movies.find((movie) => movie.id === req.params.id);
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).end();
  }
});

/** update favorite for a movie */
moviesRouter.patch('/:id', (req, res) => {
  const movie = movies.find((movie) => movie.id === req.params.id);
  if (movie) {
    if (typeof req.body === 'object') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { favorite } = req.body;
      if (typeof favorite === 'boolean') {
        movie.favorite = favorite;
      }
    }
    res.send(movie);
  } else {
    res.status(404).end();
  }
});
