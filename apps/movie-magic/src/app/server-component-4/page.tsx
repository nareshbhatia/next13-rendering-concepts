import { Footer } from '@/components/Footer';
import { MovieTable } from '@/components/MovieTable';
import { Title } from '@/components/Title';
import type { Movie } from '@/models';

async function getMovies(): Promise<Movie[]> {
  const { API_URL } = process.env;
  const url = `${API_URL}/top-10-movies`;
  console.log('----> HTTP GET', url);
  // ----- No Cached Data -----
  const resMovies = await fetch(url, { cache: 'no-store' });
  return resMovies.json() as Promise<Movie[]>;
}

/**
 * No dynamic functions
 * No cached data
 * Hence dynamically rendered
 * TODO: Calls API only once, then on, seems to be caching results
 */
export default async function ServerComponent4() {
  console.log('----> Rendering ServerComponent4');
  const movies = await getMovies();
  return (
    <div className="p-8">
      <Title>Server Component 4</Title>
      <MovieTable movies={movies} />
      <Footer />
    </div>
  );
}
