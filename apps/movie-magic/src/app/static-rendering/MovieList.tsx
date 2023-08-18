import { MovieItem } from './MovieItem';
import type { Movie } from '@/models';

async function getMovies(): Promise<Movie[]> {
  const { API_URL } = process.env;
  console.log('----> API_URL', API_URL);
  const resMovies = await fetch(`${API_URL}/movies`);
  return resMovies.json() as Promise<Movie[]>;
}

export async function MoviesList() {
  const movies = await getMovies();
  return (
    <ul className="divide-y divide-slate-200">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
