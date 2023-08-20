import { MovieList } from '@/components/MovieList';
import type { Movie } from '@/models';

async function getMovies(): Promise<Movie[]> {
  const { API_URL } = process.env;
  const url = `${API_URL}/top-10-movies`;
  console.log('----> HTTP GET', url);
  const resMovies = await fetch(url);
  return resMovies.json() as Promise<Movie[]>;
}

export default async function StaticRenderingPage() {
  console.log('----> Rendering StaticRenderingPage');
  const movies = await getMovies();
  return (
    <div className="mx-auto max-w-3xl p-4">
      <MovieList movies={movies} />
    </div>
  );
}
