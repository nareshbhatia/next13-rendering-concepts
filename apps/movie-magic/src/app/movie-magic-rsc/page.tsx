import { MovieList } from './MovieList';
import { Nav } from './Nav';
import type { Movie } from '@/models';

async function getMovies(): Promise<Movie[]> {
  const { API_URL } = process.env;
  const url = `${API_URL}/movies`;
  console.log('----> HTTP GET', url);
  // ----- No Cached Data -----
  const resMovies = await fetch(url, { cache: 'no-store' });
  return resMovies.json() as Promise<Movie[]>;
}

export default async function MovieMagicRsc() {
  console.log('----> Rendering Movie Magic RSC');
  const movies = await getMovies();
  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="divide-y divide-slate-200">
        <Nav />
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
